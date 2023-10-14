


import pic from "../../assets/images/popular.png";
import pic2 from "../../assets/images/popular2.jpg";

import { useTranslation } from "react-i18next";
import "./style.scss";
const index = () => {

    const { t } = useTranslation();
    return (
        <section className="pb-[110px]">
            <div className="container">
                <div className="flex flex-col">
                    <h2 className="text-[#242424] text-[48px] font-['MontserratSemiBold'] mb-[80px]">{t("popularTitle")}</h2>

                    <div className="flex items-center justify-between gap-x-5 mb-[110px]">
                        <div className="popular-cart relative cursor-pointer duration-200">
                            <img src={pic} alt="img" className="brightness-50 hover:brightness-100"/>
                            <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                        </div>
                        <div className="popular-cart relative cursor-pointer duration-200">
                            <img src={pic} alt="img" className="brightness-50 hover:brightness-100"/>
                            <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                        </div>
                        <div className="popular-cart relative cursor-pointer duration-200">
                            <img src={pic} alt="img" className="brightness-50 hover:brightness-100"/>
                            <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <img src={pic2} alt="img" />

                        <div className="flex flex-col">
                            <h3 className="text-[#0154A7] text-[34px] font-['MontserratBold'] mb-5">{t("popularTitle")}</h3>
                            <p className="mb-[59px] font-['MontserratSemiBold'] text-[16px] text-[#1E1E1E] leading-[22.4px] tracking-[0.64px] w-[649px]">{t("popularText")}</p>

                            <div className="flex gap-x-[80px]">
                                <div>
                                    <p className="text-[#0154A7] font-['MontserratBold'] text-[22px] mb-[13px]">{t("popularStatistics")}</p>
                                    <p className="text-[#1E1E1E] font-['MontserratBold'] text-[16px] ">{t("popularTravels")}</p>
                                </div>

                                <div>
                                    <p className="text-[#0154A7] font-['MontserratBold'] text-[22px] mb-[13px]">{t("popularStatistics")}</p>
                                    <p className="text-[#1E1E1E] font-['MontserratBold'] text-[16px] ">{t("popularRoutes")}</p>
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