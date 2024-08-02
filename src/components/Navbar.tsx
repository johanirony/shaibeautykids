'use client';
import React, { useState } from 'react';
import logo from '@/assests/logo.png';
import Image from 'next/image';
import Link from 'next/link';

import { Menu, Search, ShoppingCart } from 'lucide-react'; 
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function Navbar() {
  const components = [{
    id:1,
    title:"Magical Mango Bathwash",
    href:"/products/b575e543-1424-4c0d-8441-9959960d4bc6"
},
{
    id:2,
    title:"Velvety Vanilla Bodylotion",
    href:"/products/7977ac98-08a6-40b4-8e08-6d92f3537c99"
},
{
    id:3,
    title:"Superlicious Strawberry Shampoo",
    href:"/products/b0d51a34-ffd7-4d22-ba93-a7eec24a0e60"
},
{
    id:4,
    title:"Mosquito Repellent",
    href:"/products/46ea4754-2232-49b4-94e3-7bb17e6567c8"
},];
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="bg-[#52DCEF] grid-cols-2 items-end w-full h-full grid md:grid-cols-5"> {/* Responsive grid */}
 
      <div className='py-5 px-8 flex justify-center'>
        <Link href={"/"} ><Image src={logo} alt='' className='w-[100px]  md:w-[100px]  lg:w-[100px]' /></Link>
        
      </div>
      <div className='py-5 md:hidden px-5'> {/* Menu icon for smaller screens */}
        <Menu 
          className="text-xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>


      

      <div className={`py-5 ${isMenuOpen ? 'block' : 'hidden'} md:block`}> {/* Conditionally show navigation menu */}
        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#52DCEF] text-sm md:text-xl lg:text-xl text-white hover:bg-[#3AC7C9]">PRODUCTS</NavigationMenuTrigger>
            <NavigationMenuContent>
<ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px] bg-[#52DCEF] rounded-none  ">
  {components.map((component) => (
    <ListItem
    className='hover:bg-[#3AC7C9] text-white'
      key={component.title}
      title={component.title}
      href={component.href}
    >
      
    </ListItem>
  ))}
</ul>
</NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#52DCEF] text-sm md:text-xl lg:text-xl text-white hover:bg-[#FCF7F1]">ABOUT US</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#52DCEF] text-sm md:text-xl lg:text-xl text-white hover:bg-[#FCF7F1]">BLOG </NavigationMenuTrigger>
        </NavigationMenuItem>
    </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className=""></div>

      {/* Right side icons - adjust for responsiveness */}
      <div className='py-5 justify-end flex flex-row gap-5 px-10 md:col-span-2'> {/* Span two columns on medium screens */}
        <span className='hidden md:flex flex-row text-[15px] text-white gap-2 pt-2 hover:text-[#9FBF5A] font-semibold'><Search /> SEARCH</span> {/* Hide search on small screens */}
        <Button className='hidden md:flex  bg-[#9FBF5A] text-white text-sm gap-2 hover:bg-[#445327] rounded-none'><ShoppingCart />WHERE TO BUY</Button>
      </div> 
    </nav> 
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

// ... (ListItem component - unchanged) 
