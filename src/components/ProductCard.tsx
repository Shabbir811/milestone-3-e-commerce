import { IProductData } from "@/app/types";
import Image from "next/image";
import Link from 'next/link';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";



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



const ProductCard: React.FC<IProductData> = ({ img, title, desc, rating, price,id }) => {
    
    return (
        <div className="px-3 pt-2 border border-gray-200 rounded-xl max-w-[400px]">
            <div>
                <Image
                    className="w-full h-auto rounded-tl-xl rounded-tr-xl"
                    src={img}
                    width={200}
                    height={300}
                    alt={title}
                />
            </div>

            <div className="space-y-2 py-2">
                <Link href={`/products/${id}`}>
                    <h2 className="text-accent font-medium  uppercase">{title}</h2>
                    <p className="text-gray-500 max-w-[150px]">{desc}</p>
                </Link>
                    <div className="">{genrateRating(rating)}</div>
                    <div className="font-bold flex gap-4">
                        ${price}
                        <del className="text-gray-500 font-normal">${parseInt(price) + 50}.00</del>
                    </div>
            </div>

        </div>
    )
}

export default ProductCard
