import Image from 'next/image'
import React from 'react'
import logo from'@/assests/logo.png'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'


export default function Footer() {
    const products = [
        {
            title:"Magical Mango Bathwash",
    href:"/products/b575e543-1424-4c0d-8441-9959960d4bc6"
        },
        {
           title:"Velvety Vanilla Bodylotion",
    href:"/products/7977ac98-08a6-40b4-8e08-6d92f3537c99"
        },
        {
          
            title:"Superlicious Strawberry Shampoo",
            href:"/products/b0d51a34-ffd7-4d22-ba93-a7eec24a0e60"
        },
        {
            
            title:"Mosquito Repellent",
            href:"/products/46ea4754-2232-49b4-94e3-7bb17e6567c8"
        },
        
    ]
    
  return (
    
    <div className='flex-col md:grid md:grid-cols-3 '>
        <div className="col-span-1 bg-[#FCF7F1] flex-col px-10 pt-5 items-start ">
            <Image src={logo} alt='' width={150}/>
            <h1 className='text-xl font-medium text-[#47312e] py-3'>Sign Up To Receive Shai Beauty Coupons</h1>
            <h1 className='text-sm text-[#47312e] pb-3'>Receive skincare tips, personalized content and exclusive offers from Shai Beauty Shop</h1>
            <div className="pb-5"><Input  placeholder='First Name' className=''/></div>
            <div className="pb-5"><Input type='email' placeholder='Email Address' className='text-[#47312e]'/></div>
            <div className=" flex justify-center pb-10"><Button className='bg-[#607338] rounded-none w-full text-xl border-2 border-[#607338] hover:bg-transparent hover:text-[#607338] py-1'>SUBMIT</Button></div>
            
            



        </div>
        <div className="col-span-2 bg-[#402C2A] flex-col">
            <div className=" md:grid md:divide-y-0 md:grid-cols-4 md:divide-x-2 md:divide-white p-10 text-white md:px-5 justify-center divide-y-2 divide-white"><div className="py-5 lg:px-5 md:px-5">
                <h1 className='text-3xl'>Products</h1>
                {products.map(({title,href})=>(<ul  key={title} className='text-sm font-medium space-y-5 pt-3 '>
                    <li className='hover:underline'><Link href={href}>{title}</Link></li>
                </ul>))
                    
                }
            </div>
            <div className="py-5 lg:px-5 md:px-5">
                <h1 className='text-3xl'>Learn</h1>
                <ul className='text-sm font-medium space-y-5 pt-3 '>
                    <li className='hover:underline'>JOURNAL</li>
                    <li className='hover:underline'>SKIN MICROBIOME</li>
                    <li className='hover:underline'>SKIN CONCERNS</li>
                    
                </ul>
            </div>
            <div className="py-5 lg:px-5 md:px-5">
                <h1 className='text-3xl'>About SHAI</h1>
                <ul className='text-sm font-medium space-y-5 pt-3 '>
                    <li className='hover:underline'>OUR PHILOSOPHY</li>
                    <li className='hover:underline'>OUR INGREDIENTS</li>
                    <li className='hover:underline'>CONTACT US</li>
                    <li className='hover:underline'>EMAIL SIGN UP</li>
                    
                </ul>
            </div>
            <div className="py-5 lg:px-5 md:px-5">
                <h1 className='text-3xl'>Legal</h1>
                <ul className='text-sm font-medium space-y-5 pt-3 '>
                    <li className='hover:underline'>PRIVACY</li>
                    <li className='hover:underline'>TERMS</li>
                    <li className='hover:underline'>COOKIE POLICY</li>
                    
                </ul>
            </div>
            
            </div>
            
            <div className=''>
                
            </div>



        </div>
        
    </div>
  )
}
