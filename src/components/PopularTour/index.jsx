


import pic from "../../assets/images/popular.png";
import pic2 from "../../assets/images/popular2.jpg";

import Carousel from "../UI/Carousel";

import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "../Icons";
import "./style.scss";
const index = () => {

    const { t } = useTranslation();
    return (
        <section className="pb-[40px] sm:pb-[60px] md:pb-[110px]">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-[20px] sm:mb-[40px] md:mb-[80px]">
                        <h2 className="text-[#242424] text-[18px] sm:text-[24px] md:text-[48px] font-['MontserratSemiBold'] ">{t("popularTitle")}</h2>
                        <div className="flex gap-x-2">
                           
                            <div className="hidden sm:flex active:bg-sky-200 button-prev-slide  bg-[#0154A7] w-[44px] h-[44px] rounded-full  items-center justify-center cursor-pointer">
                                <ArrowLeft />
                            </div>
                            <div className="hidden sm:flex active:bg-sky-200 button-next-slide  bg-[#0154A7] w-[44px] h-[44px] rounded-full  items-center justify-center cursor-pointer">
                                <ArrowRight />
                            </div>
                        </div>
                    </div>


                    <div className="mb-[40px] sm:mb-[80px] md:mb-[110px]">
                        <Carousel img={pic} />
                    </div>



                    <div className="flex-col lg:flex-row  flex items-center justify-between bg-[#F7F7F7] rounded-[14px] p-5 md:bg-transparent md:p-0 md:rounded-none">
                        <img className="mb-[30px] lg:mb-[0px]" src={pic2} alt="img" />

                        <div className="flex flex-col">

                            <h3 className="text-[#0154A7] text-[18px] sm:text-[25px] md:text-[34px] font-['MontserratBold'] mb-[15px] md:mb-5">{t("popularTitle")}</h3>
                            <p className="mb-[35px] md:mb-[59px] font-['MontserratSemiBold'] text-[14px] md:text-[16px] text-[#1E1E1E] leading-[19px] md:leading-[22.4px] tracking-[0.56px] md:tracking-[0.64px] w-[100%] lg:w-[649px]">{t("popularText")}</p>

                            <div className="flex flex-col md:flex-row gap-y-[32px] md:gap-y-[0px] md:gap-x-[80px]">
                                <div>
                                    <p className="text-[#0154A7] font-['MontserratBold'] text-[20px] md:text-[22px] mb-[10px] md:mb-[13px]">{t("popularStatistics")}</p>
                                    <p className="text-[#1E1E1E] font-['MontserratBold'] text-[14px] md:text-[16px] ">{t("popularTravels")}</p>
                                </div>

                                <div>
                                    <p className="text-[#0154A7] font-['MontserratBold'] text-[20px] md:text-[22px] mb-[10px] md:mb-[13px]">{t("popularStatistics")}</p>
                                    <p className="text-[#1E1E1E] font-['MontserratBold'] text-[14px] md:text-[16px] ">{t("popularRoutes")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
};

export default index;