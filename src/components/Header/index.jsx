import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./style.scss";

import { Menu, Close } from "../Icons";

const index = () => {
    const [menu, setMenu] = useState(false);
    const [listLang, setListLang] = useState(false);
    const [text, setText] = useState("RU");
    const [color, setColor] = useState(false);
    const { t } = useTranslation();

    const changeLang = (lang) => {
        setText(lang)
        i18next.changeLanguage(lang.toLowerCase());
    }

    const changeColor = () => {
        if (window.scrollY <= 900) {
            setColor(true);
        } else {
            setColor(false)
        }
    }

    if(menu){
        document.body.style.overflowY = 'hidden';
    }
    if(!menu){
        document.body.style.overflowY = 'auto';
    }

    useEffect(() => {

        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };

    }, [])
    return (
        <header className={`py-[30px]  fixed top-0 left-0 z-50 w-full ${color ? 'bg-transparent' : 'bg-[#000000B3]'} ${menu ? 'bg-white' : null} duration-200`}>
            <div className="container">
                <nav className="flex items-cnter justify-between sm:text-[13px] md:text-[14px] lg:text-[18px] text-white">
                    <a href="#"><span className={`font-['NunitoExtraBold'] ${menu ? 'text-black' : 'text-white'}`}>STORK TOUR</span></a>

                    <ul className="hidden sm:flex  sm:gap-x-[10px] md:gap-x-[20px] lg:gap-x-[50px]  items-center font-['MontserratRegular']">
                        <li className="list-item"><a href="#"> {t("home")}</a></li>
                        <li className="list-item"><a href="#"> {t("about")}</a></li>
                        <li className="list-item"><a href="#"> {t("travel")}</a></li>
                        <li className="list-item"><a href="#"> {t("feedbacks")}</a></li>
                        <li className="list-item"><a href="#"> {t("footerContact")}</a></li>
                    </ul>


                    <div onClick={() => setListLang(!listLang)} className="hidden sm:block cursor-pointer relative font-['NunitoExtraBold'] bg-transparent px-1 outline-none">
                        {
                            text
                        }
                        {
                            listLang ?
                                <ul onChange={(e) => changeLang(e.target.value)} className="absolute top-[100%] right-[50%] bg-white w-[120px] text-black rounded-[8px] flex flex-col gap-y-[6px] py-[14px] pl-[20px]">
                                    <li onClick={(e) => changeLang("RU")} className="hover:text-[#0154A7]">RU</li>
                                    <li onClick={(e) => changeLang("UZ")} className="hover:text-[#0154A7]">UZ</li>
                                    <li onClick={(e) => changeLang("EN")} className="hover:text-[#0154A7]">EN</li>
                                </ul>
                                :
                                null
                        }
                    </div>

                    <div onClick={() => setMenu(!menu)} className="sm:hidden cursor-pointer">
                        {
                            menu ? <Close /> : <Menu />
                        }

                    </div>

                    {/* dropdown menu */}

                    <div className={`dropdown-menu absolute  ${ menu ? 'right-0' : 'right-[-100%]' } top-[100%] w-full`}>
                        {
                            menu ?
                                <div className="flex flex-col">
                                    <ul className="flex flex-col gap-y-5 text-[18px]  font-['MontserratRegular'] text-black mb-5 w-fit">
                                        <li className="list-item"><a href="#"> {t("home")}</a></li>
                                        <li className="list-item"><a href="#"> {t("about")}</a></li>
                                        <li className="list-item"><a href="#"> {t("travel")}</a></li>
                                        <li className="list-item"><a href="#"> {t("feedbacks")}</a></li>
                                        <li className="list-item"><a href="#"> {t("footerContact")}</a></li>
                                    </ul>


                                    <div onClick={() => setListLang(!listLang)} className="cursor-pointer relative font-['NunitoExtraBold'] text-black px-1 outline-none text-[18px]">
                                        {
                                            text
                                        }
                                        {
                                            listLang ?
                                                <ul onChange={(e) => changeLang(e.target.value)} className="absolute top-[100%] left-[0] bg-white w-[120px]  rounded-[8px] flex flex-col gap-y-[6px] py-[14px] pl-[20px] shadow-2xl">
                                                    <li onClick={(e) => changeLang("RU")} className="hover:text-[#0154A7]">RU</li>
                                                    <li onClick={(e) => changeLang("UZ")} className="hover:text-[#0154A7]">UZ</li>
                                                    <li onClick={(e) => changeLang("EN")} className="hover:text-[#0154A7]">EN</li>
                                                </ul>
                                                :
                                                null
                                        }
                                    </div>
                                </div> : null
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;