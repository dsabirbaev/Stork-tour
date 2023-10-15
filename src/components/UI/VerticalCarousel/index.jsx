

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import "./style.scss";
const index = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Swiper
                slidesPerView={1}
               
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="h-[350px] sm:h-[500px] relative"

                breakpoints={{
                   
                    500: {
                      width: 500,
                      direction:'vertical'
                    }
                }}
            >
                <SwiperSlide>
                    <div className="flex flex-col gap-y-[20px] text-white">
                        <h1 className="font-['MontserratSemiBold'] w-[550px] text-[36px] sm:text-[45px] md:text-[64px] leading-[50px] md:leading-[89.6px]">{t("introTitle")}</h1>
                        <p className="font-['NunitoRegular'] text-[16px] sm:text-[24px] w-[352px]">{t("introText")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col gap-y-[20px] text-white">
                        <h1 className="font-['MontserratSemiBold'] w-[550px] text-[36px] sm:text-[64px] leading-[50px] sm:leading-[89.6px]">{t("introTitle")}</h1>
                        <p className="font-['NunitoRegular'] text-[16px] sm:text-[24px] w-[352px]">{t("introText")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col gap-y-[20px] text-white">
                        <h1 className="font-['MontserratSemiBold'] w-[550px] text-[36px] sm:text-[64px] leading-[50px] sm:leading-[89.6px]">{t("introTitle")}</h1>
                        <p className="font-['NunitoRegular'] text-[16px] sm:text-[24px] w-[352px]">{t("introText")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col gap-y-[20px] text-white">
                        <h1 className="font-['MontserratSemiBold'] w-[550px] text-[36px] sm:text-[64px] leading-[50px] sm:leading-[89.6px]">{t("introTitle")}</h1>
                        <p className="font-['NunitoRegular'] text-[16px] sm:text-[24px] w-[352px]">{t("introText")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col gap-y-[20px] text-white">
                        <h1 className="font-['MontserratSemiBold'] w-[550px] text-[36px] sm:text-[64px] leading-[50px] sm:leading-[89.6px]">{t("introTitle")}</h1>
                        <p className="font-['NunitoRegular'] text-[16px] sm:text-[24px] w-[352px]">{t("introText")}</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default index;