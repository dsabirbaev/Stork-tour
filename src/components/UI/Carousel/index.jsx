
import { useTranslation } from "react-i18next";

import { ArrowLeft, ArrowRight} from "../../Icons";
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
                    >
                        <SwiperSlide className="flex items-center justify-center">
                            <div className="popular-cart relative cursor-pointer duration-200">
                                <img src={img} alt="img" className="brightness-50 hover:brightness-100"/>
                                <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex items-center justify-center">
                            <div className="popular-cart relative cursor-pointer duration-200">
                                <img src={img} alt="img" className="brightness-50 hover:brightness-100"/>
                                <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex items-center justify-center">
                            <div className="popular-cart relative cursor-pointer duration-200">
                                <img src={img} alt="img" className="brightness-50 hover:brightness-100"/>
                                <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="flex items-center justify-center">
                            <div className="popular-cart relative cursor-pointer duration-200">
                                <img src={img} alt="img" className="brightness-50 hover:brightness-100"/>
                                <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                            </div>
                        </SwiperSlide>
                       
                        <div className="button-next-slide absolute top-[-130px] right-2 bg-[#0154A7] w-[44px] h-[44px] rounded-full flex items-center justify-center cursor-pointer">
                           <ArrowRight/> 
                        </div>
                        <div className="button-prev-slide absolute top-[-130px] right-[60px] bg-[#0154A7] w-[44px] h-[44px] rounded-full flex items-center justify-center cursor-pointer">
                            <ArrowLeft/>
                        </div>
                    </Swiper>
        </div>
    );
};

export default index;