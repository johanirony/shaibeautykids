import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import hero from '@/assests/hero.jpeg'
import product1 from '@/assests/product-1.png'
import product2 from '@/assests/product-2.png'
import product3 from '@/assests/product-3.png'
import product4 from '@/assests/product-4.png'
import { Button } from "@/components/ui/button";

export default function Home() {
  const products = [
    {
      id:1,
      image:product1,
      text:"Product",
      width:150

    },
    {
      id:2,
      image:product2,
      text:"Product",
      width:180
    },
    {
      id:3,
      image:product3,
      text:"Product",
      width:200
    },
    {
      id:4,
      image:product4,
      text:"Product",
      width:250
    },
  ]
  return (
    <main className=" w-full h-full bg-[#FBF2E9]  ">
      <div className='flex flex-col md:grid md:grid-cols-2 justify-center items-center pt-[100px] px-8'>
      <div className="w-full h-full bg-inherit">
        <h1 className="text-5xl font-semibold text-[#47312E] ">Created Just <br></br> for <span className="text-[#6C30C7]">K</span><span className="text-[#B44301]">I</span><span className="text-[#11704B]">D</span><span className="text-[#1245D5]">S</span></h1>
        <p className='text-2xl text-[#47312e] pt-3'>
        Introducing Shai Beauty Kids Created with a scientific understanding of developing kid skin and hair, with self care products that prepare them for their widening world. And as kids gain independence, they also gain confidence knowing they can take care of themselves
        </p>
       
        
      </div>
      <div className="flex justify-center "><Image src={hero} width={500} className="rounded-full" alt=""/></div>
      </div>
      <div>

      </div>
      <div className="px-8 pt-5">
        <h1 className="text-5xl font-semibold text-[#47312e]" >Kids <span className="text-[#1245d5]">P</span><span className="text-[#b44301]">r</span><span className="text-[#6c30c7]">o</span><span className="text-[#11704b]">d</span><span className="text-[#b44301]">u</span><span className="text-[#1245d5]">c</span><span className="text-[#6c30c7]">t</span><span className="text-[#11704b]">s</span></h1>
        <div className="flex flex-col md:grid md:grid-cols-4  ">
          {products.map(({id,image,text,width})=>(
            <div key={id} className="pt-3 px-10 w-auto h-auto bg-[#EFE0CD] m-10 md:m-[50px] rounded-lg flex items-center  flex-col ">
            <Image src={image} alt="" width={width} className=" hover:scale-110"/>
              <h1 className="font-normal">{text}</h1>
              <Button className="bg-[#28818C] rounded-full mx-20 my-3 hover:bg-transparent border-[#28818c] border-2 hover:text-[#28818c] text-lg">Shop Now</Button>
            
            </div>
          ))}
        </div>
      </div>
      <div className="px-8 pt-5">
        <h1 className="text-5xl font-semibold text-[#47312e]">Kids <span className="text-[#1245d5]">A</span><span className="text-[#b44301]">s</span><span className="text-[#6c30c7]">s</span><span className="text-[#11704b]">e</span><span className="text-[#b44301]">m</span><span className="text-[#1245d5]">b</span><span className="text-[#6c30c7]">l</span><span className="text-[#11704b]">e</span><span className="text-[#11704b]">{'!'}</span></h1>
      </div>
      
      
    </main>
  );
}
