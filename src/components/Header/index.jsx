
import "./style.scss";

const index = () => {
    return (
        <header className="pt-[30px] fixed top-0 left-0 z-50 w-full bg-transparent">
            <div className="container">
                <nav className="flex items-cnter justify-between text-[18px] text-white ">
                    <a href="#"><span className="font-['NunitoExtraBold']">STORK TOUR</span></a>

                    <ul className="flex gap-x-[50px] items-center font-['MontserratRegular']">
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Путешествия</a></li>
                        <li><a href="#">Отзывы</a></li>
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