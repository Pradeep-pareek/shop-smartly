// import LockImg1 from "../../assets/images/locks1.png";
// import LockImg2 from "../../assets/images/locks2.png";
// import LockImg3 from "../../assets/images/locks3.png";
// import LockImg4 from "../../assets/images/locks4.png";
// import LockImg5 from "../../assets/images/locks5.png";
// import LockImg6 from "../../assets/images/locks6.png";
import { MdAddLink } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { FaBox } from "react-icons/fa6";


const TypesOfLocks = () => {
    return (
        <section className="bg-[#F7F5FF] py-14">
            <div className=' w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12  lg:flex md:flex-none '>
                <div className='container mx-auto'>
                    <div className='mb-[70px]'>
                        <div className='text-start text-5xl leading-snug font-bold mb-8  '>
                            <h2 className="font-serif">Everything You Need To <br /> Sell Better</h2>
                        </div>

                        <div className="grid grid-cols-3 gap-12">
                            <div className="bg-[#FFEBF5] drop-shadow-lg  p-8 rounded-xl">
                                <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdAddLink /></span>
                                <h2 className="text-xl font-bold mt-2">Take orders via chat with one link</h2>
                                <p className="text-base font-normal">Create a simple list of all your products and get a link that routes customer’s orders to whatsapp.</p>
                            </div>
                            <div className="bg-[#a5f8d8] drop-shadow-lg  p-8 rounded-xl">
                                <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><MdOutlinePayments /></span>
                                <h2 className="text-xl font-bold mt-4">Seamlessly collect payments</h2>
                                <p>Get a free bank account, collect payment in multiple ways & create professional invoices</p>
                            </div>
                            <div className="bg-[#EFDBE4] drop-shadow-lg p-8 rounded-xl">
                                <span className=" p-4 inline-block text-[32px] bg-[#fff] rounded-full text-[#000] " ><FaBox /></span>
                                <h2 className="text-xl font-bold mt-4">Effortlessly get items delivered</h2>
                                <p>Get multiple channels to deliver your items at discounted prices.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default TypesOfLocks
