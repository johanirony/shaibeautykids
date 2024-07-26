import { Button } from "@/components/ui/button"
import db from "@/db/db"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ProductPage({
    params:{id},

}:{
    params:{id:string}
}){
    const product = await db.product.findUnique({
        where:{id}
    })
    if (product==null) return notFound()
    return (
<div className="flex flex-col md:grid md:grid-cols-2 pt-5 px-8 bg-[#F2E5D7] justify-center items-center ">
    <div className=" flex justify-center">  <Image src={product.imagePath} alt="" width={400} height={150} className="w-[200px] md:w-[400px]"/></div>
    <div className=" w-full h-full  px-5 pt-5 flex flex-col items-start space-y-3"><h1 className="text-[#95554B] text-base font-normal" >New Product </h1>
    <div >
    <h1 className="text-5xl font-semibold text-[#47312E] ">{product.name}</h1></div>
    <Button className="bg-[#5B6F34] text-white border-2 border-[#5B6F34] hover:bg-transparent hover:text-[#5B6F34] text-xl w-[200px]  "><Link href={`/products/${product.id}/purchase`}>BUY NOW</Link></Button>
    <h1 className="text-xl text-[#52392E] font-semibold">Product Overview</h1>
    <p className="text-base font-light text-[#52392E]">{product.description}</p>
    <ul className="list-disc text-base font-light text-[#52392E] space-y-5 px-5">
        <li>Gentle enough for dry, sensitive skin, & gentler than adult products</li>
        <li>Formulated without parabens, phthalates, sulfates, & dyes</li>
        <li>Light fragrance known to be as gentle as fragrance-free products</li>
        <li>Washes off thoroughlys</li>
    </ul>
    <span className="underline"></span>
        
    </div>

</div> 

)

}