import CartCard from "@/components/CartCard"


function CartSection() {
    return (
        <div className="container my-16 ">
            <div className="grid lg:grid-cols-3 grid-cols-1">

                <div className="col-span-2">
                    <CartCard src={"/1.png"} title={"product1"} size={"l"} price={1600} />
                </div>

                <div className="bg-gray-100 p-5 rounded-xl">
                    <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase">
                        order summary
                    </h2>
                    <hr className="bg-slate-700/40 h-0.5 my-2" />
                    <div className="text-sm font-medium tracking-tight text-gray-500">
                        <div className="flex items-center justify-between capitalize">
                            <h2 className="">sub total</h2>
                            <h2 className="">$1500</h2>
                        </div>
                        <div className="flex items-center justify-between capitalize">
                            <h2 className="">delivery charges</h2>
                            <h2 className="">TBD</h2>
                        </div>
                        <div className="flex items-center justify-between capitalize">
                            <h2 className="">sale tax</h2>
                            <h2 className="">TBD</h2>
                        </div>
                    </div>
                    <hr className="bg-slate-700/60 h-0.5 mb-3" />
                    <div className="flex items-center justify-between uppercase font-semibold ">
                        <h2 className="">totol</h2>
                        <h2 className="">$1500</h2>
                    </div>
                    <hr className="bg-slate-700/60 h-0.5 my-3" />
                    <div className="flex items-center justify-center w-full">
                        <button className="hover:bg-transparent hover:text-gray-500 hover:border-2 bg-blue-500 p-2 rounded-lg text-white scroll-m-20 text-sm font-semibold tracking-tight">proceed to checkout </button>
                    </div>
                    <hr className="bg-slate-700/60 h-0.5 my-3" />
                    <p className="text-xs font-semibold tracking-tight text-gray-500 w-[97%] text-center italic">
                        {"*Delivery Charges and the Sales Tax will be calculated in the cheackout page"}
                    </p>




                </div>
            </div>

        </div>
    )
}

export default CartSection
