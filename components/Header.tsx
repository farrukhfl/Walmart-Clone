'use client'

import { getCartTotal } from "@/lib/getCartTotal";
import { useCartStore } from "@/store";
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

function Header() {
const router = useRouter()
const cart = useCartStore((state)=>state.cart)
const total = getCartTotal(cart)
  const handleSubmit = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = e.currentTarget.input.value
    router.push(`/search?q=${input}`)
  }
  return (
    <header className="flex flex-col md:flex-row bg-wallmart px-10 py-7 space-x-5 items-center">
      <Link href="/" className="mb-5 md:mb-0">
        <Image
          src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
          alt="logo"
          height={150}
          width={150}
          
        />
      </Link>

      <form onSubmit={handleSubmit} className="flex items-center rounded-full w-full flex-1 bg-white">
        <input
          className="flex-1 px-4 text-black rounded-l-full outline-none placeholder:text-sm"
          type="text"
          placeholder="Search anything..."
          name="input"
        />
        <button type="submit">
          <Search className="rounded-full bg-yellow-400 w-10 px-2 h-10 cursor-pointer" />
        </button>
        </form>

            <div className="flex space-x-5 mt-5 md:mt-0">
                <Link href="/" 
                className="hidden xl:flex text-white font-bold space-x-2 items-center text-sm"
                >
                    <Grid2X2 size={20} />
                    <p>Department</p>
                </Link>
                <Link href="/" 
                className="hidden xl:flex text-white font-bold space-x-2 items-center text-sm"
                >
                    <LayoutGrid size={20} />
                    <p>Services</p>
                </Link>
                <Link href="/" 
                className="flex text-white font-bold space-x-2 items-center text-sm"
                >
                    <Heart size={20} />
                    <div>
                    <p className="text-xs font-extralight">ReOrder</p>
                    <p>My Items</p>
                    </div>
                  
                </Link>
                <Link href="/" 
                className="flex text-white font-bold space-x-2 items-center text-sm"
                >
                    <User size={20} />
                    <div>
                    <p className="text-xs font-extralight">Sign In</p>
                    <p>Account</p>
                    </div>
                  
                </Link>
                <Link href="/basket" 
                className="flex text-white font-bold space-x-2 items-center text-sm"
                >
                    <ShoppingCart size={20} />
                    <div>
                      <p className="font-light text-xs">
                        {cart.length > 0 ? `${cart.length} items` : `No items`}
                        </p>                   
                      <p>
                        {cart.length > 0 ? `${total}` : "0"}
                      </p>
                    </div>
                  
                </Link>
            </div>
    </header>
  );
}

export default Header;
