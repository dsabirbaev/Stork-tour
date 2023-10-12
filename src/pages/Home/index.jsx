
import Intro from "../../components/Intro";
import Tours from "../../components/Tours";
import PopularTour from "../../components/PopularTour";
import FunProgram from "../../components/FunProgram";
import "./style.scss"

const index = () => {
    return (
        <div>
            <Intro/>
            <Tours/>
            <PopularTour/>
            <FunProgram/>
        </div>
    );
};

export default index;