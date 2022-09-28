import http from "k6/http";

const target = "http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/"

export const options = {
    // TOOD: figure some reasonable test options
};

export function visitIndex() {
    http.get(target, {
        tags: { action: "index" },
    });
}

function visitProduct(addToCartProbability) {
    addToCartProbability = addToCartProbability || 100;

    const productID = selectProduct;

    http.get(target + "product/" + productID, {
        tags: { action: "product" },
    });

    // TODO: Add to cart according to the probability
    addToCart(productID);
};

function selectProduct() {
    // TODO: Make this select a random product from a CSV file
    // https://k6.io/docs/examples/data-parameterization/
    return "OLJCESPC7Z";
};

function addToCart(productID) {
    const quantity = getRandomIntInclusive(1, 10);

    let resp = http.post(target + "product/" + productID, {
        product_id: productID,
        quantity: quantity,
    },
    { tags: { action: "add_to_cart"} }
    );

    check(resp, {
        'response code was 302': (resp) => resp.status == 302
    });
};

function visitCart() {
    http.get(target + "cart", {
        tags: { action: "visit_cart" },
    })
}

function doCheckout() {
    const emailSuffix = "scratch"; // TODO: Randomize

    const card = selectCreditCard();

    http.post(target + "cart/checkout", {
        "email": `loadtest.${emailSuffix}@example.com`,
        "street_address": "1600 Amphitheatre Parkway",
        "zip_code": "94043",
        "city": "Mountain View",
        "state": "CA",
        "country": "United States",
        "credit_card_number": card.card_number,
        "credit_card_expiration_month": card.expiration_month,
        "credit_card_expiration_year": card.expiration_year,
        "credit_card_cvv": card.cvv,
        }, 
        { tags: { action: "checkout" },
    });
};

function selectCreditCard() {
    // TODO: Randomize from a CSV
    // https://k6.io/docs/examples/data-parameterizatio
    return {
        card_number: "1234000011114321",
        expiration_month: "12",
        expiration_year: "24",
        cvv: "042"
    };
}

// The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }