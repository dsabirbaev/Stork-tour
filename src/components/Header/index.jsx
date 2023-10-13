import { useEffect, useState } from "react";
import "./style.scss";

const index = () => {
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY < 900) {
            setColor(true);
        } else {
            setColor(false)
        }
    }

    useEffect(() => {

        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, [])
    return (
        <header className={`py-[30px] fixed top-0 left-0 z-50 w-full ${color ? 'bg-transparent' : 'bg-[#000000B3]'}`}>
            <div className="container">
                <nav className="flex items-cnter justify-between text-[18px] text-white">
                    <a href="#"><span className="font-['NunitoExtraBold']">STORK TOUR</span></a>

                    <ul className="flex gap-x-[50px] items-center font-['MontserratRegular']">
                        <li className="list-item"><a href="#">Главная</a></li>
                        <li className="list-item"><a href="#">О компании</a></li>
                        <li className="list-item"><a href="#">Путешествия</a></li>
                        <li className="list-item"><a href="#">Отзывы</a></li>
                    </ul>

                    <select className="font-['NunitoExtraBold'] bg-transparent px-1 outline-none">
                        <option className="mb-[6px] text-black" value="RUS">RUS</option>
                        <option value="UZB" className="text-black">UZB</option>
                        <option value="ENG" className="text-black">ENG</option>
                    </select>
                </nav>
            </div>
        </header>
    );
};

export default index;