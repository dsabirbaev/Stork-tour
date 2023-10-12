

import { Message } from "../Icons";
import "./style.scss";

const index = () => {
    return (
        <section id="intro" className="pt-[324px]">
            <div className="container">
                <div className="flex flex-col gap-y-[20px] text-white">
                    <h1 className="font-['MontserratSemiBold'] w-[550px] text-[64px] leading-[89.6px]">Лучшие туры по Узбекистану</h1>
                    <p className="font-['NunitoRegular'] text-[24px] w-[352px]">Мы предлагаем вам незабываемое путешествие</p>
                </div>

                <div className="w-[100px] h-[100px] bg-[#0154A7] rounded-full flex items-center justify-center cursor-pointer fixed right-[3%] top-[80%] z-40">
                    <Message/>
                </div>
            </div>
        </section>
    );
};

export default index;