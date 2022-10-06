# Hipster Shop / Online Boutique Example

## Introduction
The [Online Boutique](https://github.com/GoogleCloudPlatform/microservices-demo) (also known as the Hipster Shop) is a microservices demo application from Google.
It consists of 11 microservices that together implement a web-based ecommerce shop with products that a user can browse, add to a shopping cart, and purchase.

## Usage

Deploy the application to your cluster with the following command:

```sh
kubectl apply -f /manifests/manifests.yaml
```

Note: This command will deploy the application to whichever namespace is selected in your current `kubectl` context.

## Architecture
From the Google Online Boutiqe documentation:

| Service                                              | Language      | Description                                                                                                                       |
| ---------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [frontend](./src/frontend)                           | Go            | Exposes an HTTP server to serve the website. Does not require signup/login and generates session IDs for all users automatically. |
| [cartservice](./src/cartservice)                     | C#            | Stores the items in the user's shopping cart in Redis and retrieves it.                                                           |
| [productcatalogservice](./src/productcatalogservice) | Go            | Provides the list of products from a JSON file and ability to search products and get individual products.                        |
| [currencyservice](./src/currencyservice)             | Node.js       | Converts one money amount to another currency. Uses real values fetched from European Central Bank. It's the highest QPS service. |
| [paymentservice](./src/paymentservice)               | Node.js       | Charges the given credit card info (mock) with the given amount and returns a transaction ID.                                     |
| [shippingservice](./src/shippingservice)             | Go            | Gives shipping cost estimates based on the shopping cart. Ships items to the given address (mock)                                 |
| [emailservice](./src/emailservice)                   | Python        | Sends users an order confirmation email (mock).                                                                                   |
| [checkoutservice](./src/checkoutservice)             | Go            | Retrieves user cart, prepares order and orchestrates the payment, shipping and the email notification.                            |
| [recommendationservice](./src/recommendationservice) | Python        | Recommends other products based on what's given in the cart.                                                                      |
| [adservice](./src/adservice)                         | Java          | Provides text ads based on given context words.                                                                                   |

![Architecture diagram](architecture-diagram.png)

## Resources

The resources in this directory can be used to launch an Online Boutique instance in your Kubernetes cluster. 
All of the manifests are combined into a single YAML file `manifests.yaml` in the `manifests/` folder.

More information and other versions of the Online Boutique manifests can be found at the [official Online Boutique repo](https://github.com/GoogleCloudPlatform/microservices-demo).

