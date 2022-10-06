import { check,sleep } from "k6";
import { SharedArray } from "k6/data";
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js"
import http from "k6/http";
import exec from "k6/execution";

const target = __ENV.SCRIPT_TARGET;
const productsFilename = __ENV.SCRIPT_PRODUCTS_FILE
const cardsFilename = __ENV.SCRIPT_CREDITCARDS_FILE

export const options = {
    discardResponseBodies: true,
    scenarios: {
        hipster: {
            executor: "constant-arrival-rate",
            duration: "5m",
            rate: 30,
            timeUnit: "1s",
            preAllocatedVUs: 250,
            maxVUs: 400,
            gracefulStop: "1m",
        }
    },
};

const productData = new SharedArray("product data", function() {
    return papaparse.parse(open(productsFilename), { header: true, skipEmptyLines: true }).data;
});

const cardData = new SharedArray("credit card data", function() {
    return papaparse.parse(open(cardsFilename), { header: true, skipEmptyLines: true }).data;
});

export default function () {
    let selector = Math.random() * 100;
    if (selector < 50) {
        browsing();
    } else {
        shopping();
    }
}

export function browsing() {
    visitIndex();
    sleep(1);

    for (let i = 0; i < 5; i++) {
        visitProduct(0);
        sleep(1);
    }
}

export function shopping() {
    visitIndex();
    sleep(1);

    for (let i = 0; i < 5; i++) {
        visitProduct(50);
        sleep(1);
    }

    visitCart();
    sleep(1);
    doCheckout();
}

function visitIndex() {
    let res = http.get(target, {
        tags: { action: "index" },
    });
    
    check(res, {
        'visitIndex response code was 200': (res) => res.status == 200
    });
}

function visitProduct(addToCartProbability) {
    addToCartProbability = addToCartProbability || 100;

    const productID = selectProduct();

    let res = http.get(target + "product/" + productID, {
        tags: { action: "product" },
    });

    check(res, {
        'visitProduct response code was 200': (res) => res.status == 200
    });

    if ((Math.random() * 100) <= addToCartProbability) {
        addToCart(productID);
    }
}

function selectProduct() {
    const randomProduct = productData[Math.floor(Math.random() * productData.length)];
    return randomProduct.id;
}

function addToCart(productID) {
    const quantity = getRandomIntInclusive(1, 10);

    let res = http.post(target + "cart", {
        product_id: productID,
        quantity: quantity,
    },
    { tags: { action: "add_to_cart"} }
    );

    check(res, {
        'addToCart response code was 200': (res) => res.status == 200
    });
}

function visitCart() {
    let res = http.get(target + "cart", {
        tags: { action: "visit_cart" },
    });

    check(res, {
        'visitCart response code was 200': (res) => res.status == 200
    });
}

function doCheckout() {
    const emailSuffix = exec.scenario.name + "." + exec.vu.idInTest.toString();

    const card = selectCreditCard();

    let res = http.post(target + "cart/checkout", {
        email: `loadtest.${emailSuffix}@example.com`,
        street_address: "1600 Amphitheatre Parkway",
        zip_code: "94043",
        city: "Mountain View",
        state: "CA",
        country: "United States",
        credit_card_number: card.card_number,
        credit_card_expiration_month: card.expiration_month,
        credit_card_expiration_year: card.expiration_year,
        credit_card_cvv: card.cvv,
        }, 
        { tags: { action: "checkout" },
    });

    check(res, {
        'doCheckout response code was 200': (res) => res.status == 200
    });
};

function selectCreditCard() {
    return cardData[Math.floor(Math.random() * cardData.length)];
}

// The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
