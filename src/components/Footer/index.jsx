import { Logo, Map, Headphone, Convert, Facebook, Insta, YouTube, Twitter } from "../Icons";

import { useTranslation } from "react-i18next";
import "./style.scss";

const index = () => {
    const { t } = useTranslation();

    return (
        <footer className="pt-[30px] md:pt-[43px] pb-[30px]">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex-col md:flex-row flex justify-between mb-[40px] md:mb-[80px] md:flex-wrap">
                        <div className="mx-auto md:mx-0 mb-[20px] md:mb-[0px]">
                            <Logo />
                        </div>

                        <ul className="flex md:flex-col gap-[25px] md:gap-y-[10px] flex-wrap mb-5 md:mb-0">
                            <li className="text-[#0154A7] font-['MontserratSemiBold'] text-[18px]  md:mb-[15px]">{t("home")}</li>
                            <li className="text-[#1E1E1ECC] font-['MontserratMedium'] text-[18px]"><a href="#">{t("about")}</a></li>
                            <li className="text-[#1E1E1ECC] font-['MontserratMedium'] text-[18px]"><a href="#">{t("travel")}</a></li>
                            <li className="text-[#1E1E1ECC] font-['MontserratMedium'] text-[18px]"><a href="#">{t("feedbacks")}</a></li>
                            <li className="text-[#1E1E1ECC] font-['MontserratMedium'] text-[18px]"><a href="#">{t("footerContact")}</a></li>
                        </ul>

                        <ul className="flex flex-col gap-y-[10px] mb-5 md:mb-0">
                            <li className="text-[#1E1E1E] font-['MontserratSemiBold'] text-[16px] md:text-[18px] mb-[10px] md:mb-[15px]">{t("footerConData")}</li>
                            <li className="flex"> <Map/> <span className="text-[16px] md:text-[18px] font-['MontserratSemiBold'] text-[#1E1E1E] mx-5">{t("address")}:</span> <span className="font-['MontserratMedium'] text-[16px] md:text-[18px] text-[#1E1E1ECC]">Company adress</span></li>
                            <li className="flex"> <Headphone/> <span className="text-[16px] md:text-[18px] font-['MontserratSemiBold'] text-[#1E1E1E] mx-5">{t("phone")}:</span> <span className="font-['MontserratMedium'] text-[16px] md:text-[18px] text-[#1E1E1ECC]">+998 90 123 45 67</span></li>
                            <li className="flex"> <Convert/> <span className="text-[16px] md:text-[18px] font-['MontserratSemiBold'] text-[#1E1E1E] mx-5">{t("email")}:</span> <span className="font-['MontserratMedium'] text-[16px] md:text-[18px] text-[#1E1E1ECC]">companymail@gmail.com</span></li>
                        </ul>

                        <ul className="flex flex-col gap-y-[10px]">
                            <li className="text-[#1E1E1E] font-['MontserratSemiBold'] text-[16px] md:text-[18px] mb-[10px] md:mb-[15px]">{t("footerSocials")}</li>
                            <li className="flex md:justify-between items-center gap-x-[10px] cursor-pointer">
                                <span className="twitter  w-[48px] h-[48px] rounded-full border border-[#0154A7] flex items-center justify-center">
                                    <Twitter/>
                                </span>

                                <span className="facebook w-[48px] h-[48px] rounded-full border border-[#0154A7] flex items-center justify-center">
                                    <Facebook/>
                                </span>

                                <span className="youtube w-[48px] h-[48px] rounded-full border border-[#0154A7] flex items-center justify-center">
                                    <YouTube/>
                                </span>

                                <span className="insta w-[48px] h-[48px] rounded-full border border-[#0154A7] flex items-center justify-center">
                                    <Insta/>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center text-[#1E1E1E] font-['MontserratRegular'] opacity-[0.5] text-[14px]">
                        <p>{t("footerAuth")}</p>
                       
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default index;