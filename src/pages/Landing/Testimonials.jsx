import Slider from "react-slick";
import Testimonial1 from "../../assets/images/testimonial1.png";
import { Icon } from '@iconify/react';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "#EF940F", width: '45px', height: "45px", borderRadius: "50%" }}
            onClick={onClick}
        >
            <Icon icon="ooui:next-ltr" color='#fff' width='18px' />
        </div>
    );
}
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "#EF940F", width: '45px', height: "45px", borderRadius: "50%" }}
            onClick={onClick}
        >
            <Icon icon="ooui:next-rtl" color='#fff' width='18px' />
        </div>
    );
}
const Testimonials = () => {
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className='testimonial_sec'>
            <div className='w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12'>
                <div className='testimonials mb-[40px]'>
                    <h1>Testimonial</h1>
                    <Slider {...settings}>
                        <div>
                            <div className='carousel_card'>
                                <img src={Testimonial1} alt="" />
                                <p className='pt-3 text-black'> "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sint unde esse magni! Obcaecati quasi culpa a illum voluptatem ad iste laboriosam non dolores in, nisi soluta fugiat autem deleniti."</p>
                                <h2 className='pt-3 text-black'>Andrew W.</h2>
                            </div>
                        </div>
                        <div>
                            <div className='carousel_card'>
                                <img src={Testimonial1} alt="" />
                                <p className='pt-3 text-black'> " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sint unde esse magni! Obcaecati quasi culpa a illum voluptatem ad iste laboriosam non dolores in, nisi soluta fugiat autem deleniti."</p>
                                <h2 className='pt-3 text-black'>Andrew W.</h2>
                            </div>
                        </div>
                        <div>
                            <div className='carousel_card'>
                                <img src={Testimonial1} alt="" />
                                <p className='pt-3 text-black'> " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sint unde esse magni! Obcaecati quasi culpa a illum voluptatem ad iste laboriosam non dolores in, nisi soluta fugiat autem deleniti."</p>
                                <h2 className='pt-3 text-black'>Andrew W.</h2>
                            </div>
                        </div>
                        <div>
                            <div className='carousel_card'>
                                <img src={Testimonial1} alt="" />
                                <p className='pt-3 text-black'> "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sint unde esse magni! Obcaecati quasi culpa a illum voluptatem ad iste laboriosam non dolores in, nisi soluta fugiat autem deleniti."</p>
                                <h2 className='pt-3 text-black'>Andrew W.</h2>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
