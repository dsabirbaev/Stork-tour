import { Logo, Map, Headphone, Convert, Facebook, Insta, YouTube, Twitter } from "../Icons";
import "./style.scss";

const index = () => {
    return (
        <footer className="pt-[43px] pb-[30px]">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex justify-between mb-[80px]">
                        <Logo />

                        <ul className="flex flex-col gap-y-[10px]">
                            <li className="text-[#0154A7] font-['MontserratSemiBold'] text-[18px] mb-[15px]">Главная</li>
                            <li className="text-[#1E1E1ECC] font-['MontserratMedium'] text-[18px]"><a href="#">О компании</a></li>
                            <li className="text-[#1E1E1ECC] font-['MontserratMedium'] text-[18px]"><a href="#">Путешествия</a></li>
                            <li className="text-[#1E1E1ECC] font-['MontserratMedium'] text-[18px]"><a href="#">Отзывы</a></li>
                            <li className="text-[#1E1E1ECC] font-['MontserratMedium'] text-[18px]"><a href="#">Контакты</a></li>
                        </ul>

                        <ul className="flex flex-col gap-y-[10px]">
                            <li className="text-[#1E1E1E] font-['MontserratSemiBold'] text-[18px] mb-[15px]">Контактные данные</li>
                            <li className="flex"> <Map/> <span className="text-[18px] font-['MontserratSemiBold'] text-[#1E1E1E] mx-5">Адрес:</span> <span className="font-['MontserratMedium'] text-[18px] text-[#1E1E1ECC]">Company adress</span></li>
                            <li className="flex"> <Headphone/> <span className="text-[18px] font-['MontserratSemiBold'] text-[#1E1E1E] mx-5">Телефон номер:</span> <span className="font-['MontserratMedium'] text-[18px] text-[#1E1E1ECC]">+998 90 123 45 67</span></li>
                            <li className="flex"> <Convert/> <span className="text-[18px] font-['MontserratSemiBold'] text-[#1E1E1E] mx-5">Эл.почта:</span> <span className="font-['MontserratMedium'] text-[18px] text-[#1E1E1ECC]">companymail@gmail.com</span></li>
                        </ul>

                        <ul className="flex flex-col gap-y-[10px]">
                            <li className="text-[#1E1E1E] font-['MontserratSemiBold'] text-[18px] mb-[15px]">Социальные сети</li>
                            <li className="flex justify-between items-center gap-x-[10px] cursor-pointer">
                                <span className="w-[48px] h-[48px] rounded-full border border-[#0154A7] flex items-center justify-center">
                                    <Twitter/>
                                </span>

                                <span className="w-[48px] h-[48px] rounded-full border border-[#0154A7] flex items-center justify-center">
                                    <Facebook/>
                                </span>

                                <span className="w-[48px] h-[48px] rounded-full border border-[#0154A7] flex items-center justify-center">
                                    <YouTube/>
                                </span>

                                <span className="w-[48px] h-[48px] rounded-full border border-[#0154A7] flex items-center justify-center">
                                    <Insta/>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center text-[#1E1E1E] font-['MontserratRegular'] opacity-[0.5] text-[14px]">
                        <p>Авторские права © 2023 • Все правы защищены.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default index;