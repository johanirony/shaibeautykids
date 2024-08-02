

import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"


type ProductCardProps = {
  id: string
  name: string
  priceInRupees: number
  description: string
  imagePath: string
}

export function ProductCard({
  id,
  name,
  priceInRupees,
  description,
  imagePath,
}: ProductCardProps) {
  return (
    <div key={id} className="pt-3 px-10 w-auto h-auto bg-[#9FBF5A] m-10 md:m-[50px] md:rounded-lg rounded-lg flex items-center justify-center  flex-col ">
        <Link href={`/products/${id}`}> <Image src={imagePath} alt="" width={150} height={150} className=" hover:scale-110"/></Link>
           
              <h1 className="font-normal text-sm text-white text-center">{name}</h1>
              <Button className="bg-[#F2A74B] text-white rounded-full mx-20 my-3 hover:bg-transparent border-[#F2A74B] border-2 hover:text-white text-lg"><Link href={`/products/${id}/purchase`}>Shop Now</Link></Button>
            
            </div>
  )
}

