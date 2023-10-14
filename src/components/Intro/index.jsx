

import { Message } from "../Icons";
import { useTranslation } from "react-i18next";
import VerticalCarousel from "../UI/VerticalCarousel"
import "./style.scss";

const index = () => {
    const { t } = useTranslation();
    return (
        <section id="intro" className="pt-[222px] md:pt-[324px] h-[600px] sm:h-[900px]">
            <div className="container">
                
               
                <VerticalCarousel/>
              

                <div className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] bg-[#0154A7] rounded-full flex items-center justify-center cursor-pointer fixed right-[3%] top-[80%] z-40">
                    <Message/>
                </div>

                
            </div>
        </section>
    );
};

export default index;