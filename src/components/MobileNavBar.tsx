"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineAppstore, AiOutlineHome } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoClose, IoMenuOutline } from 'react-icons/io5'

function MobileNavBar() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='lg:hidden fixed bottom-0 w-full bg-white left-1/2 max-w-[500px] -translate-x-[50%] mob-navbar px-8 z-30'>
            <div className="flex justify-between text-[28px] py-2">

                <div className="relative">
                    <div className={`${ showMenu ? "flex": "hidden"} w-fit  flex-col absolute bottom-0 mb-12 bg-white/90 left-0 gap-5 mx-auto font-medium py-4 px-8 text-blackish shadow-lg transition-all duration-300 z-40`}>
                        <Link
                            className="navbar-link no-underline relative "
                            href={"/"}
                        >
                            HOME
                        </Link>
                        <Link
                            className="navbar-link no-underline relative "
                            href={"/"}
                        >
                            CATAEGORIES
                        </Link>
                        <Link
                            className="navbar-link no-underline relative "
                            href={"/"}
                        >
                            MEN&apos;S
                        </Link>
                        <Link
                            className="navbar-link no-underline relative "
                            href={"/"}
                        >
                            WOMEN&apos;S
                        </Link>
                    </div>

                    <button onClick={() => setShowMenu(prev => !prev)}>
                        {
                            showMenu ? <IoClose /> : <IoMenuOutline />
                        }
                    </button>
                </div>
                <div className="relative">
                   <Link href={"/cart"}> <HiOutlineShoppingBag /></Link>
                    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1 ">
                        0
                    </div>
                </div>
                <Link href={"/"}> <AiOutlineHome /> </Link>
                <div className="relative">
                    <FiHeart />
                    <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1 ">
                        0
                    </div>
                </div>
                <AiOutlineAppstore />
            </div>

        </div>
    )
}

export default MobileNavBar
