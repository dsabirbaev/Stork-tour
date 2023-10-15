
import { useState } from "react";
import VerticalCarousel from "../UI/VerticalCarousel"
import ToolTip from "../UI/ToolTip";
import Modal from "../UI/Modal";
import "./style.scss";

const index = () => {
    const [open, setOpen] = useState(false);

    return (
        <section id="intro" className="pt-[222px] md:pt-[324px] h-[600px] md:h-[800px] lg:h-[900px]">
            <Modal open={open} setOpen={setOpen}/>
            <div className="container">
                <VerticalCarousel/>
              
                <div onClick={() => setOpen(!open)} className="fixed right-[3%] top-[80%] z-40 cursor-pointer w-[60px] md:w-[100px] h-[60px] md:h-[100px] bg-[#0154A7] rounded-full flex items-center justify-center">
                    <ToolTip/>
                </div>
                
            </div>
        </section>
    );
};

export default index;