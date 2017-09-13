import Client, { Config } from 'shopify-buy'

export default function ShopClient() {
  const config = new Config({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_TOKEN,
  })

  return new Client(config)
}
