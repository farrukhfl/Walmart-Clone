import { Organic } from "@/app/typings/searchTypings"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"  

function Product({product}: {product: Organic}) {

  return (
   <Link className="flex flex-col border rounded-md h-full p-5 relative" href={{pathname: "/product", query: {url: product.url}}}>
    <Image src={product.image} alt={product.title} height={200} width={200} className="mx-auto"  />
    <p className="text-xl font-bold">
        {product?.price.currency}
        {product.price.price}
     </p>
     {product.badge && (
        <Badge className="w-fit absolute top-2 right-2">{product.badge}</Badge>
     )}
     <p className="font-light">{product.title}</p>
     {product.rating && (
        <p className="text-sm">
            {product.rating.rating}⭐
            <span className="text-gray-400 ml-2">({product.rating.count})</span>
        </p>
     )}
   </Link>
  )
}

export default Product
