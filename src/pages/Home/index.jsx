
import Intro from "../../components/Intro";
import Tours from "../../components/Tours";
import PopularTour from "../../components/PopularTour";
import FunProgram from "../../components/FunProgram";
import Offer from "../../components/Offer";
import "./style.scss"

const index = () => {
    return (
        <div>
            <Intro/>
            <Tours/>
            <PopularTour/>
            <FunProgram/>
            <Offer/>
        </div>
    );
};

export default index;