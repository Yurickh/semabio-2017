import ShopifyBuy from 'shopify-buy'

export default function shopClient() {
  this.client ||= ShopifyBuy.buildClient({
    accessToken: process.env.REACT_APP_SHOPIFY_TOKEN,
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    appId: process.env.REACT_APP_SHOPIFY_APP_ID,
  })

  return this.client
}
