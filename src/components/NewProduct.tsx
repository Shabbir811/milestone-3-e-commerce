import React from 'react';
import ProductCard from './ProductCard';
import { IProductData } from '@/app/types';



function NewProduct() {
    const productsData: IProductData[] = [
    
        {
          img: "/1.png",
          title: "the product 1",
          desc: "adipisicing elit. In recusandae, quasi nihil reprehenderit nulla numquam? Consequuntur velit,",
          rating: 4,
          price: "120.00",
          id: "1"
        },
        {
          img: "/b.png",
          title: "the product 2",
          desc: "adipisicing elit. In recusandae, quasi nihil reprehenderit nulla numquam? Consequuntur velit,",
          rating: 5,
          price: "67.00",
          id: "2"
        },
        {
          img: "/3.png",
          title: "the product 3",
          desc: "adipisicing elit. In recusandae, quasi nihil reprehenderit nulla numquam? Consequuntur velit,",
          rating: 2,
          price: "12.00",
          id: "3"
        },
        {
          img: "/d.png",
          title: "the product 4",
          desc: "adipisicing elit. In recusandae, quasi nihil reprehenderit nulla numquam? Consequuntur velit,",
          rating: 1,
          price: "20.00",
          id: "4"
        },
        {
          img: "/2.png",
          title: "the product 5",
          desc: "adipisicing elit. In recusandae, quasi nihil reprehenderit nulla numquam? Consequuntur velit,",
          rating: 5,
          price: "145.00",
          id: "5"
        },
        {
          img: "/4.png",
          title: "the product 6",
          desc: "adipisicing elit. In recusandae, quasi nihil reprehenderit nulla numquam? Consequuntur velit,",
          rating: 3,
          price: "230.00",
          id: "6"
        },
        {
          img: "/3.png",
          title: "the product 7",
          desc: "adipisicing elit. In recusandae, quasi nihil reprehenderit nulla numquam? Consequuntur velit,",
          rating: 4,
          price: "123.00",
          id: "7"
        },
        {
            img: "/a.png",
            title: "the product 8",
            desc: "adipisicing elit. In recusandae, quasi nihil reprehenderit nulla numquam? Consequuntur velit,",
            rating: 3,
            price: "40.00",
            id: "8"
          },
      ]
  return (
    <div >
        <div className='container py-16'>
            <h2 className="font-medium text-2xl pb-4">New Products</h2>

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {
                    productsData.map(
                        (data:IProductData,)=>(
                            <ProductCard
                                key={data.id}
                                img={data.img}
                                title={data.title}
                                desc={data.desc}
                                rating={data.rating}
                                price={data.price}
                                id={`${data.id}`}
                            />
                        )
                    )
                }
            </div>
        </div>
      
    </div>
  )
}

export default NewProduct
