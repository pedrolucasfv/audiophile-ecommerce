import { loadStripe } from '@stripe/stripe-js'

const configValue: string = process.env.NEXT_PUBLIC_STRIPE_KEY
  ? process.env.NEXT_PUBLIC_STRIPE_KEY
  : ''

type lineItemsProps = {
  price: string
  quantity: number
}

export async function checkout(lineItems: lineItemsProps[]) {
  const getStripe = () => {
    const stripePromisse = loadStripe(configValue)
    return stripePromisse
  }
  const stripe = await getStripe()
  await stripe?.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}/sucess-payment`,
    cancelUrl: `${window.location.origin}/failed-payment`
  })
}
