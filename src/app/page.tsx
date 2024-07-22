import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import hero from '@/assests/hero.png'

export default function Home() {
  return (
    <main className=" w-full h-full bg-[#FBF2E9]  ">
      <div className='grid grid-cols-2 justify-center items-center pt-[100px] px-8'>
      <div className="w-full h-full bg-inherit">
        <h1 className="text-5xl font-semibold text-[#47312E] ">Created Just <br></br> for <span className="text-[#6C30C7]">K</span><span className="text-[#B44301]">I</span><span className="text-[#11704B]">D</span><span className="text-[#1245D5]">S</span></h1>
        <p className='text-2xl text-[#47312e] pt-3'>
        Introducing Shai Beauty Kids Created with a scientific understanding of developing kid skin and hair, with self care products that prepare them for their widening world. And as kids gain independence, they also gain confidence knowing they can take care of themselves
        </p>
       
        
      </div>
      <div><Image src={hero} alt=""/></div>
      </div>
      <div>

      </div>
      
      
    </main>
  );
}
