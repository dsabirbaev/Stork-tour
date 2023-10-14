
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

import "./style.scss";

const index = ({img}) => {
    const { t } = useTranslation();
    return (
        <div>
             <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide",
                        }}
                        className="tour-slide"
                        // breakpoints={{
                        //     // when window width is >= 640px
                        //     640: {
                        //       width: 640,
                        //       slidesPerView: 1,
                        //     },
                        //     // when window width is >= 768px
                        //     768: {
                        //       width: 768,
                        //       slidesPerView: 2,
                        //     },
                        // }}
                    >
                       
                        <SwiperSlide className="flex items-center justify-center">
                            <div className="popular-cart relative cursor-pointer duration-200">
                                <img src={img} alt="img" className="brightness-50 hover:brightness-100"/>
                                <span className="absolute bottom-[20px] md:bottom-[30px] left-[20px] md:left-[30px] w-[170px] md:w-[297.143px] text-white font-['MontserratMedium'] text-[16px] md:text-[24px]">{t("popularCard")}</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex items-center justify-center">
                            <div className="popular-cart relative cursor-pointer duration-200">
                                <img src={img} alt="img" className="brightness-50 hover:brightness-100"/>
                                <span className="absolute bottom-[20px] md:bottom-[30px] left-[20px] md:left-[30px] w-[170px] md:w-[297.143px] text-white font-['MontserratMedium'] text-[16px] md:text-[24px]">{t("popularCard")}</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex items-center justify-center">
                            <div className="popular-cart relative cursor-pointer duration-200">
                                <img src={img} alt="img" className="brightness-50 hover:brightness-100"/>
                                <span className="absolute bottom-[20px] md:bottom-[30px] left-[20px] md:left-[30px] w-[170px] md:w-[297.143px] text-white font-['MontserratMedium'] text-[16px] md:text-[24px]">{t("popularCard")}</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex items-center justify-center">
                            <div className="popular-cart relative cursor-pointer duration-200">
                                <img src={img} alt="img" className="brightness-50 hover:brightness-100"/>
                                <span className="absolute bottom-[20px] md:bottom-[30px] left-[20px] md:left-[30px] w-[170px] md:w-[297.143px] text-white font-['MontserratMedium'] text-[16px] md:text-[24px]">{t("popularCard")}</span>
                            </div>
                        </SwiperSlide>
                       
                        
                    </Swiper>
        </div>
    );
};

export default index;