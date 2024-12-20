"use client"

import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Menu = () => {
    const [open,setOpen] = useState(false)

  return (
    <div>   
        <FiMenu className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
        />{open && (
            <div className="absolute bg-black text-white left-0 top-20 h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10 w-[12%]">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/deals">Deals</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/cart">Cart</a></li>
                                         
                </ul>
                

            </div>
        ) }
      

    </div>
  )
}

export default Menu
