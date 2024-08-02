
import Image from "next/image";
import hero from '@/assests/hero.jpeg'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import db from "@/db/db";
import { Product } from "@prisma/client";
import { ProductCard, } from "@/components/ProductCard";
import { cache } from "@/lib/cache";

const getMostPopularProducts=cache(()=> {
  return db.product.findMany({
    where:{isAvailableForPurchase:true},
    orderBy:{orders:{_count:"desc"}},
    take:4
  })
},["/","getMostPopularProducts"],{revalidate:60*60*24})
const getNewestProducts=cache(()=> {
  return db.product.findMany({
    where:{isAvailableForPurchase:true},
    orderBy:{createdAt:"desc"},
    take:4
  })
},['/','getNewestProducts'],{revalidate:60*60*24})

export default function Home() {
  
  return (
    <main className=" w-full h-full bg-white ">
      <Navbar/>
      <div className='flex flex-col md:grid md:grid-cols-2 justify-center items-center pt-[100px] px-8'>
      <div className="w-full h-full bg-inherit">
        <h1 className="text-5xl font-semibold text-black ">Created Just <br></br> for <span className="text-[#6C30C7]">K</span><span className="text-[#B44301]">I</span><span className="text-[#11704B]">D</span><span className="text-[#1245D5]">S</span></h1>
        <p className='text-2xl text-black pt-3'>
        Introducing Shai Beauty Kids Created with a scientific understanding of developing kid skin and hair, with self care products that prepare them for their widening world. And as kids gain independence, they also gain confidence knowing they can take care of themselves
        </p>
       
        
      </div>
      <div className="flex justify-center "><Image src={hero} width={500} className="rounded-full" alt=""/></div>
      </div>
      <div>

      </div>
      <div className="px-8 pt-5">
        <h1 className="text-5xl font-semibold text-black" >Kids <span className="text-[#1245d5]">P</span><span className="text-[#b44301]">r</span><span className="text-[#6c30c7]">o</span><span className="text-[#11704b]">d</span><span className="text-[#b44301]">u</span><span className="text-[#1245d5]">c</span><span className="text-[#6c30c7]">t</span><span className="text-[#11704b]">s</span></h1>

        <ProductGridSection productsFetcher={getMostPopularProducts} title="Most Popular"/>
        <ProductGridSection productsFetcher={getNewestProducts} title="Newest"/>

      
      </div>
      <div className="px-8 pt-5">
        <h1 className="text-5xl font-semibold text-black">Kids <span className="text-[#1245d5]">A</span><span className="text-[#b44301]">s</span><span className="text-[#6c30c7]">s</span><span className="text-[#11704b]">e</span><span className="text-[#b44301]">m</span><span className="text-[#1245d5]">b</span><span className="text-[#6c30c7]">l</span><span className="text-[#11704b]">e</span><span className="text-[#11704b]">{'!'}</span></h1>
      </div>
      <Footer/>
      
      
    </main>
  );
}
type ProductGridSectionProps={
  title:string
  productsFetcher:()=>Promise<Product[]>
}
function ProductGridSection({productsFetcher,title}:ProductGridSectionProps){
  return(
    <div>
       <h1 className="text-4xl font-semibold text-black pt-5">{title}</h1>
       <div className="space-y-4">
   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg gap-4 pt-5">
      
          <ProductSuspense productsFetcher={productsFetcher} />
       
      </div>
    </div>
    </div>
    
  )
 

}
async function ProductSuspense({
  productsFetcher,
}: {
  productsFetcher: () => Promise<Product[]>
}) {
  return (await productsFetcher()).map(product => (
    <ProductCard key={product.id} {...product} />
  ))
}