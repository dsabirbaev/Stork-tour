

import { Speed, Security, Like } from "../../components/Icons";
const index = () => {
    return (
        <section className="pb-[80px]">
            <div className="container">
                <div className="flex flex-col">
                    <h2 className="text-[#0154A7] font-['MontserratSemiBold'] text-[48px] mb-2">Развлекательная программа</h2>
                    <p className="mb-[80px] text-[#1E1E1E] text-[18px] font-['MontserratSemiBold'] tracking-[0.72px] leading-[25.2px] w-[649px]">Узбекистан предлагает не только экскурсии к историческим архитектурным памятникам, но и места, где можно весело провести время с семьей и друзьями.</p>


                    <div className="bg-[#F7F7F7] pt-[40px] pb-[65px]">
                        <h3 className="text-[#0154A7] font-['MontserratBold'] text-[34px] text-center mb-2">Что Вас ожидает?</h3>
                        <p className="text-center text-[#1E1E1E] text-[18px] font-['MontserratSemiBold'] tracking-[0.72px] mb-[60px]">Наша команда работает только для Вас!</p>

                        <div className="flex items-center justify-center gap-x-[180px]">
                            <div className="flex flex-col items-center gap-y-5">
                                <span className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#4BA0EB1A]"><Speed /></span>
                                
                                <span className="text-[#0154A7] text-[18px] tracking-[0.72px] font-['MontserratSemiBold']">
                                    Скорость
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-y-5">
                                <span className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#4BA0EB1A]">
                                    <Security />
                                </span>

                                <span className="text-[#0154A7] text-[18px] tracking-[0.72px] font-['MontserratSemiBold']">
                                    Безопасность
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-y-5">
                                <span className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#4BA0EB1A]">
                                    <Like />
                                </span>
                                
                                <span className="text-[#0154A7] text-[18px] tracking-[0.72px] font-['MontserratSemiBold']">
                                    Комфорт и Удобство
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