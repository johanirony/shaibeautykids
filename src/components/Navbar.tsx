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
    title:"Product 1",
    href:"/"
},
{
    id:2,
    title:"Product 2",
    href:"/"
},
{
    id:3,
    title:"Product 3",
    href:"/"
},
{
    id:4,
    title:"Product 4",
    href:"/"
},];
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="bg-[#F2E5D7] grid-cols-2 items-end w-full h-full grid md:grid-cols-5"> {/* Responsive grid */}
 
      <div className='py-5 px-8 flex justify-center'>
        <Image src={logo} alt='' className='w-[100px]  md:w-[100px]  lg:w-[100px]' />
      </div>
      <div className='py-5 md:hidden px-5'> {/* Menu icon for smaller screens */}
        <Menu 
          className="text-xl text-[#553E3B]"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>


      

      <div className={`py-5 ${isMenuOpen ? 'block' : 'hidden'} md:block`}> {/* Conditionally show navigation menu */}
        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#F2E5D7] text-sm md:text-xl lg:text-xl text-[#553E3B] hover:bg-[#FCF7F1]">PRODUCTS</NavigationMenuTrigger>
            <NavigationMenuContent>
<ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px] bg-[#FCF7F1] rounded-none  ">
  {components.map((component) => (
    <ListItem
    className='hover:bg-[#F2E5D7]'
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
            <NavigationMenuTrigger className="bg-[#F2E5D7] text-sm md:text-xl lg:text-xl text-[#553E3B] hover:bg-[#FCF7F1]">ABOUT US</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#F2E5D7] text-sm md:text-xl lg:text-xl text-[#553E3B] hover:bg-[#FCF7F1]">BLOG </NavigationMenuTrigger>
        </NavigationMenuItem>
    </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className=""></div>

      {/* Right side icons - adjust for responsiveness */}
      <div className='py-5 justify-end flex flex-row gap-5 px-10 md:col-span-2'> {/* Span two columns on medium screens */}
        <span className='hidden md:flex flex-row text-[15px] text-[#553E3B] gap-2 pt-2 hover:text-[#607338] font-semibold'><Search /> SEARCH</span> {/* Hide search on small screens */}
        <Button className='hidden md:flex  bg-[#607338] text-white text-sm gap-2 hover:bg-[#445327] rounded-none'><ShoppingCart />WHERE TO BUY</Button>
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
