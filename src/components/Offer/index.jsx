

import pic from "../../assets/images/offer.png";
import { useTranslation } from "react-i18next";
const index = () => {

    const { t } = useTranslation();
    return (
        <section className="pb-[100px]">
            <div className='container'>
                <div className='flex flex-col'>
                    <h2 className="text-[#242424] text-[48px] font-['MontserratSemiBold'] mb-[80px]">{t("offerTitle")}</h2>
                
                    <div className="flex items-center justify-between gap-x-5">
                        <div className="relative cursor-pointer duration-200">
                            <img src={pic} alt="img" className="brightness-50 hover:brightness-100"/>
                            <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                        </div>

                        <div className="relative cursor-pointer duration-200">
                            <img src={pic} alt="img" className="brightness-50 hover:brightness-100"/>
                            <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                        </div>

                        <div className="relative cursor-pointer duration-200">
                            <img src={pic} alt="img" className="brightness-50 hover:brightness-100"/>
                            <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">{t("popularCard")}</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default index;