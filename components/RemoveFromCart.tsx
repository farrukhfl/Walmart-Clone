'use client'
import { Product } from "@/app/typings/productTypings"
import { useCartStore } from "@/store"
import { Button } from "./ui/button"

function RemoveFromCart({product}:{product: Product}) {
    const removeFromCart = useCartStore((state)=> state.removeFromCart)
    const handleRemove = () => {
        removeFromCart(product)
    }
    return (
        <Button className="bg-wallmart hover:bg-wallmart/50" onClick={handleRemove}>-</Button>
  )
}

export default RemoveFromCart
