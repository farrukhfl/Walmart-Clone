import { ShoppingCartIcon } from "lucide-react"

function BasketPage() {
  return (
    <div className="w-full p-10 mx-auto max-w-7xl">
      <div className="flex space-x-2 items-center">
        <ShoppingCartIcon className="w-10 h-10" />
        <h1 className="text-3xl">Your Cart</h1>
      </div>
      <p className="mt-2 mb-5">
        Review the items in the cart and checkout when ready
      </p>
    </div>
  )
}

export default BasketPage
