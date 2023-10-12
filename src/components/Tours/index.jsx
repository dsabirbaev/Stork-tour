
import img1 from "../../assets/images/atp.png";
import img2 from "../../assets/images/infinity.png";
import img3 from "../../assets/images/oregon.png";
import img4 from "../../assets/images/responsible.png";
import img5 from "../../assets/images/traveloka.png";


const index = () => {
    return (
        <section className="py-[80px]">
            <div className="container">
                <div className="flex items-center justify-between mb-[80px]">
                    <img src={img1} alt="atp" />
                    <img src={img2} alt="infinity" />
                    <img src={img3} alt="oregon" />
                    <img src={img4} alt="responsible" />
                    <img src={img5} alt="traveloka" />
                </div>


                <div>
                    <iframe
                     className="rounded-[14px]" 
                     width="100%" height="500" 
                     src="https://www.youtube.com/embed/x0k7RAq71pE" 
                     title="Древняя и новая история Самарканда" 
                     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        
                     </iframe>
                </div>
                
            </div>
        </section>
    );
};

export default index;