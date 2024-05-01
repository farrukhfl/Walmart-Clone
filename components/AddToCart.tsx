'use client'
import { Product } from "@/app/typings/productTypings"
import { useCartStore } from "@/store"
import { Button } from "./ui/button"
import RemoveFromCart from "./RemoveFromCart"

function AddToCart({product}:{product: Product}) {
const [cart, addToCart] = useCartStore((state)=> [
    state.cart,
    state.addToCart
])

const howManyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku).length

    const handleAdd=()=> {
        addToCart(product)
    }
    if(howManyInCart > 0){
        return(
            <div className="flex space-x-5 items-center">
                <RemoveFromCart product={product} />
                <span>{howManyInCart}</span>
                <Button className="bg-wallmart hover:bg-wallmart/50" onClick={handleAdd}>
                    +    
                </Button> 
            </div>
        )
    }
  return (
    <div>
        <Button className="bg-wallmart hover:bg-wallmart/50" onClick={handleAdd}>Add to Cart</Button>
    </div>
  )
}

export default AddToCart
