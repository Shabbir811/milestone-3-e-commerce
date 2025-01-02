import Image from 'next/image'
import React from 'react'
import Counter from './Counter'

function CartCard({
    src, title, size, price,
}: {
    src: string,
    title: string,
    size: string,
    price: number,
}) {
    return (
        <div className='flex p-10'>
            <Image
                src={src}
                alt={title}
                width={80}
                height={80}
                className='w-[100px] h-[100px]'
            />
            <div className="flex px-5 justify-between items-center w-full ">
                <div className="">
                    <h2 className="text-sm font-semibold leading-none line-clamp-1 text-gray-500">{title}</h2>
                    <p className="mt-2 text-sm text-gray-500/80 leading-none line-clamp-1  font-ssemibold ">
                        size:&nbsp;<span>{size}</span>
                    </p>
                    <Counter size={"sm"}/>
                </div>
            </div>
            <div className=""></div>

        </div>
    )
}

export default CartCard
