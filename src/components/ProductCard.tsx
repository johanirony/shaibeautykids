

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
    <div key={id} className="pt-3 px-10 w-auto h-auto bg-[#EFE0CD] m-10 md:m-[50px] md:rounded-lg rounded-lg flex items-center justify-center  flex-col ">
        <Link href={`/products/${id}`}> <Image src={imagePath} alt="" width={150} height={150} className=" hover:scale-110"/></Link>
           
              <h1 className="font-normal text-sm text-[#47312e] text-center">{name}</h1>
              <Button className="bg-[#28818C] rounded-full mx-20 my-3 hover:bg-transparent border-[#28818c] border-2 hover:text-[#28818c] text-lg"><Link href={`/products/${id}/purchase`}>Shop Now</Link></Button>
            
            </div>
  )
}

