import Counter from '@/components/Counter';
import Image from 'next/image';
import { IProductData, } from '@/app/types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaHeart, } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';



function DynimicProduct({ params: { id } }: { params: { id: string } }) {
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


  const products = productsData.filter(
    (product) => (
      product.id === id
    )
  )

  const product = products[0]



  const genrateRating = (rating: number) => {
    if (rating == 1) {
      return (
        <div className="flex gap-1 text-[20px] text-[#ff9529]">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />

        </div>
      )
    } else if (rating == 2) {
      return (
        <div className="flex gap-1 text-[20px] text-[#ff9529]">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />

        </div>
      )
    } else if (rating == 3) {
      return (
        <div className="flex gap-1 text-[20px] text-[#ff9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />

        </div>
      )
    } else if (rating == 4) {
      return (
        <div className="flex gap-1 text-[20px] text-[#ff9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />

        </div>
      )
    } else if (rating == 5) {
      return (
        <div className="flex gap-1 text-[20px] text-[#ff9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />


        </div>
      )
    }

  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-4 py-24 mx-auto ">
        <div className="lg:w-4/5 mx-auto flex flex-wrap shadow-xl px-7 relative">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full  h-[400px] object-cover object-top rounded"
            src={product.img}
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              ZAARA&apos;S
            </h2>
            <h1 className="uppercase text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
              {genrateRating(product.rating)}

            </div>
            <p className="leading-relaxed">
              {product.desc}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-4 pr-16">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <Counter size='lg'/>
            <div className="flex my-5">
              <span className="title-font font-medium text-2xl flex flex-co  sm:flex-row gap-4 text-gray-900">
                ${product.price}
                <del className="text-gray-500 font-normal">${parseInt(product.price) + 50}.00</del>
              </span>

              <button className="flex gap-2 items-center ml-auto h-[40px] text-white hover:bg-accent/80 bg-accent border-0 py-2 px-4 focus:outline-none hover:bg-blackishnpm rounded">
                <Link className='flex items-center gap-2 no-underline cursor-pointer' href={"/cart"}>
                  Add To <FaCartShopping />
                </Link>
              </button>

            </div>
            <button className="flex cursor-pointer gap-2 w-full text-center items-center justify-center ml-auto h-[40px] text-white bg-accent hover:bg-accent/80 border-0  focus:outline-none hover:bg-blackishnpm rounded my-4 mx-4">
              Buy Now <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default DynimicProduct
