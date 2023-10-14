

import pic from "../../assets/images/offer.png";
import { useTranslation } from "react-i18next";
import Carousel from "../UI/Carousel";

import { ArrowLeft, ArrowRight } from "../Icons";
const index = () => {

    const { t } = useTranslation();
    return (
        <section className="pb-[80px] md:pb-[100px]">
            <div className='container'>
                <div className='flex flex-col'>
                    <div className="flex items-center justify-between mb-[20px] md:mb-[80px]">
                        <h2 className="text-[#242424] text-[18px] sm:text-[24px] md:text-[48px] font-['MontserratSemiBold'] ">{t("offerTitle")}</h2>
                        
                        <div className="flex gap-x-2">
                            <div className="hidden sm:flex active:bg-sky-200 button-prev-slide  bg-[#0154A7] w-[44px] h-[44px] rounded-full  items-center justify-center cursor-pointer">
                                <ArrowLeft />
                            </div>
                            <div className="hidden sm:flex active:bg-sky-200 button-next-slide  bg-[#0154A7] w-[44px] h-[44px] rounded-full  items-center justify-center cursor-pointer">
                                <ArrowRight />
                            </div>
                        </div>
                    </div>


                    <div>
                        <Carousel img={pic} />
                    </div>

                  
                </div>

            </div>
        </section>
    );
};

export default index;