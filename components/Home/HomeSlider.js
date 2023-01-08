import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

// Images imported
const slider1 = "/img/slider/1.jpg"
const slider2 = "/img/slider/2.png"
const slider3 = "/img/slider/3.jpg"
const slider4 = "/img/slider/4.jpg"
const slider5 = "/img/slider/5.jpg"


export default function HomeSlider() {
    return (
        <>
        
            <div className="industify_slider_alpha" data-desc-show="yes" data-category-show="yes" data-nav-types="square" data-autoplay-switch="enabled" data-autoplay-time="8000" data-effect="cards" data-progress="enabled" data-box-pos="cr" data-img-effect="enabled" data-text-effect="enabled">
                
                {/* <!-- Alpha Slider: navigation --> */}
                <div className="owl_control">
                    <div className="fn_prev"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                    <div className="fn_next"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                </div>
                {/* <!-- /Alpha Slider: navigation --> */}

                {/* <!-- Alpha Slider: pagination --> */}
                <div className="swiper-pagination"></div>
                {/* <!-- /Alpha Slider: pagination --> */}

                {/* <!-- Alpha Slider: wrapper --> */}
                
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    autoplaydisableoninteraction={false}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: ".fn_prev",
                        nextEl: ".fn_next",
                    }}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    className="custom-class"
                >

                    <SwiperSlide>
                    <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider1})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Avaiable 24/7</span></p>
                                        <h3><span>Junk Removal</span></h3>
                                        <div className="desc"><span>We underpromise and overdeliver. Contact us & schedule a visit.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider2})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <h3><span>Residential Services</span></h3>
                                        <p><span>House/Property Cleanout, Storage Cleanout, Shed & Deck Removal</span></p>
                                        <div className="desc"><span>Whe can remove anything and everything from your home. We can clean out the junk piled up in your house bedrooms, attec, garage, storage unit, deck and more.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider3})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <h3><span>Commercial Services</span></h3>
                                        <p><span>Construction Debris Removal & Commercial Cleanout</span></p>
                                        <div className="desc"><span>Designation Dump meticulously and efficiently carries out jobs of all complexities: simple or complex.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider4})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <h3><span>Other Waste Removal Services</span></h3>
                                        <p><span>Appliance, Mattress & Hot Tub Removal</span></p>
                                        <div className="desc"><span>Got specific items in mind and not sure what to do? Just give us a call. Whether it's a broken TV, a piano, firdge or any other appliance you need to get rid of or complicated waste that needs to be removed, we have you covered.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider5})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <h3><span>Eco-Friendly</span></h3>
                                        <p><span>We Recycle, Donate & Follow Safe Disposal Practices</span></p>
                                        <div className="desc"><span>We recycle biogdegradable waste and applropriately dispose of the remaining junk in the safest way possible. Parishable items are donated to charity</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                {/* <!-- Alpha Slider: wrapper --> */}

            </div>
            {/* <!-- /Alpha Slider --> */}
        </>
    )
}
