import Image from 'next/image';
export default function Products() {
    return(
        <div>
            <div className="grid grid-cols-4 gap-5 p-5">
                <div className="bg-white border border-gray-300 rounded-md p-4 text-center transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-black/10 ">
                    {/* <Image src="images/Floral-dress.png" alt="Floral Skirt"> */}
                    <h3>Floral Skirt</h3>
                    <p>Ksh 2500</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}