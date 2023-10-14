

import { Speed, Security, Like } from "../../components/Icons";
import { useTranslation } from "react-i18next";
const index = () => {

    const { t } = useTranslation();
    return (
        <section className="pb-[40px] sm:pb-[60px] md:pb-[80px]">
            <div className="container">
                <div className="flex flex-col">
                    <h2 className="text-[#0154A7] font-['MontserratSemiBold'] text-[18px] sm:text-[24px] md:text-[48px] mb-2">{t("funTitle")}</h2>
                    <p className="mb-[40px] md:mb-[80px] text-[#1E1E1E] text-[14px] sm:text-[18px] font-['MontserratSemiBold'] tracking-[0.56px] md:tracking-[0.64px] leading-[19px] md:leading-[25.2px] w-[100%] lg:w-[649px]">{t("funText")}</p>


                    <div className="bg-[#F7F7F7] pt-[20px] md:pt-[40px] pb-[30px] md:pb-[65px]">
                        <h3 className="text-[#0154A7] font-['MontserratBold'] text-[18px] md:text-[34px] text-center mb-2">{t("funAsk")}</h3>
                        <p className="text-center text-[#1E1E1E] text-[14px] md:text-[18px] font-['MontserratSemiBold']  tracking-[0.56px] md:tracking-[0.72px] mb-[40px] md:mb-[60px]">{t("funInfo")}</p>

                        <div className="flex-col sm:flex-row flex items-center justify-center  gap-y-[40px] sm:gap-y-0 sm:gap-x-[60px]  md:gap-x-[180px]">
                            <div className="flex flex-col items-center gap-y-5">
                                <span className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#4BA0EB1A]"><Speed /></span>
                                
                                <span className="text-[#0154A7] text-[16px] md:text-[18px] tracking-[0.72px] font-['MontserratSemiBold']">
                                    {t("funSpeed")}
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-y-5">
                                <span className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#4BA0EB1A]">
                                    <Security />
                                </span>

                                <span className="text-[#0154A7] text-[16px] md:text-[18px] tracking-[0.72px] font-['MontserratSemiBold']">
                                    {t("funSafe")}
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-y-5">
                                <span className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#4BA0EB1A]">
                                    <Like />
                                </span>
                                
                                <span className="text-[#0154A7] text-[16px] md:text-[18px] tracking-[0.72px] font-['MontserratSemiBold']">
                                    {t("funComfort")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;