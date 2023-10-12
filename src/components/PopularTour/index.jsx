


import pic from "../../assets/images/popular.png";
import pic2 from "../../assets/images/popular2.jpg";
import "./style.scss";
const index = () => {
    return (
        <section className="pb-[110px]">
            <div className="container">
                <div className="flex flex-col">
                    <h2 className="text-[#242424] text-[48px] font-['MontserratSemiBold'] mb-[80px]">Популярные направления</h2>

                    <div className="flex items-center justify-between gap-x-5 mb-[110px]">
                        <div className="popular-cart relative cursor-pointer duration-200">
                            <img src={pic} alt="img" className="brightness-50 hover:brightness-100"/>
                            <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">Комплекс Хазрати Имам</span>
                        </div>
                        <div className="popular-cart relative cursor-pointer duration-200">
                            <img src={pic} alt="img" className="brightness-50 hover:brightness-100"/>
                            <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">Комплекс Хазрати Имам</span>
                        </div>
                        <div className="popular-cart relative cursor-pointer duration-200">
                            <img src={pic} alt="img" className="brightness-50 hover:brightness-100"/>
                            <span className="absolute bottom-[30px] left-[30px] w-[297.143px] text-white font-['MontserratMedium'] text-[24px]">Комплекс Хазрати Имам</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <img src={pic2} alt="img" />

                        <div className="flex flex-col">
                            <h3 className="text-[#0154A7] text-[34px] font-['MontserratBold'] mb-5">Популярные направления</h3>
                            <p className="mb-[59px] font-['MontserratSemiBold'] text-[16px] text-[#1E1E1E] leading-[22.4px] tracking-[0.64px] w-[649px]">В нашей стране много зон отдыха, турбаз, природных баз с целебным воздухом, большое внимание уделено озёрам и рек. Вас удивит широкий спектр размещения в Узбекистане – гостиницы, частные пансионы, бутик-отели, хостелы, студенческие городки, здесь вы можете выбрать самую доступную цену.</p>

                            <div className="flex gap-x-[80px]">
                                <div>
                                    <p className="text-[#0154A7] font-['MontserratBold'] text-[22px] mb-[13px]">3323+ (на пример)</p>
                                    <p className="text-[#1E1E1E] font-['MontserratBold'] text-[16px] ">Счастливые путешественники</p>
                                </div>

                                <div>
                                    <p className="text-[#0154A7] font-['MontserratBold'] text-[22px] mb-[13px]">3323+ (на пример)</p>
                                    <p className="text-[#1E1E1E] font-['MontserratBold'] text-[16px] ">Маршруты созданы</p>
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