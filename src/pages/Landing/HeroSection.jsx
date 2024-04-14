import HeroRight from '../../assets/images/hero_right.png';
import { TypeAnimation } from 'react-type-animation';
import { MdNavigateNext } from "react-icons/md";


const HeroSection = () => {
    return (
        <div className='bg-[#FCF9F3]'>
            <div className='left_ellipse'></div>
            <div className='w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12  lg:flex md:flex-none '>
                <div className='grid lg:grid-cols-2 justify-center items-center'>
                <div className=''>
                    <h1 className='text-6xl font-semibold  font-serif  '>Sell easily on <br /> {" "}
                        <TypeAnimation
                            sequence={[
                                `Social Media`,
                                1500,
                                `Whatsapp`,
                                1500,
                                `Instagram`,
                                1500
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                            style={{ fontSize: '40px', display: 'inline-block' }}
                            className='text-[#332089]'
                        />
                    </h1>
                    <p className='pt-4'>Catlog helps businesses take orders via chat, manage their businesses & get paid easily.</p>
                    <button className='px-6 py-2 rounded-full btn-shine  text-lg bg-[#EF940F] mt-5 text-white font-semibold flex  items-center gap-1'>Get started <MdNavigateNext className='text-2xl button-icon ' /> </button>
                </div>
                <div className=''>
                    <img src={HeroRight} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
