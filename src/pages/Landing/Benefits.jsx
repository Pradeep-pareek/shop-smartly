import React from 'react'
import Slider from "react-slick";

const Benefits = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='bg-white py-14'>
            <div className=' w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 '>

                <h2 className='text-center text-4xl leading-snug font-bold  font-serif '>What you can sell with Catlog</h2>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <div class="slide-item">
                                <figure class="effect-lily">
                                    <img src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg" alt="img1" />
                                    <figcaption>
                                        <div>
                                            <h2>Food & Drinks</h2>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dolore earum aperiam quos at, blanditiis reprehenderit impedit sunt omnis dignissimos mollitia voluptatum adipisci odit totam aut ducimus, id neque quam!</p>
                                        </div>
                                        <a href="#">View more</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div class="slide-item">
                                <figure class="effect-lily">
                                    <img src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg" alt="img1" />
                                    <figcaption>
                                        <div>
                                            <h2>Fashion Items</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio temporibus officiis suscipit molestias saepe quos placeat iure dolores, neque eligendi quia animi reiciendis sequi deserunt debitis voluptatem iste, voluptas numquam.</p>
                                        </div>
                                        <a href="#">View more</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div class="slide-item">
                                <figure class="effect-lily">
                                    <img src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg" alt="img1" />
                                    <figcaption>
                                        <div>
                                            <h2>Gadgets</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, modi recusandae officia doloremque inventore ducimus ipsum hic, ipsa atque, itaque nostrum voluptatem eveniet voluptates expedita est sunt asperiores nulla fugit.</p>
                                        </div>
                                        <a href="#">View more</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div class="slide-item">
                                <figure class="effect-lily">
                                    <img src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg" alt="img1" />
                                    <figcaption>
                                        <div>
                                            <h2>Beauty & Makeup</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus distinctio ab repudiandae. Distinctio, maxime veniam. Facilis itaque, consequatur est libero voluptates aperiam laboriosam impedit at odio qui similique velit.</p>
                                        </div>
                                        <a href="#">View more</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div class="slide-item">
                                <figure class="effect-lily">
                                    <img src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg" alt="img1" />
                                    <figcaption>
                                        <div>
                                            <h2>Physical Items</h2>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint eveniet! Libero atque repellat dignissimos in. Sint esse doloremque aspernatur nisi eveniet consequuntur, tempore dignissimos officiis aliquam ab quis quos.</p>
                                        </div>
                                        <a href="#">View more</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </section>

    )
}

export default Benefits
