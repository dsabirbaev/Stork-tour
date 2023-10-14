

import pic from "../../assets/images/offer.png";
import { useTranslation } from "react-i18next";
import Carousel from "../UI/Carousel";
const index = () => {

    const { t } = useTranslation();
    return (
        <section className="pb-[100px]">
            <div className='container'>
                <div className='flex flex-col'>
                    <h2 className="text-[#242424] text-[48px] font-['MontserratSemiBold'] mb-[80px]">{t("offerTitle")}</h2>
                
                    <div className="">
                        <Carousel img={pic}/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default index;