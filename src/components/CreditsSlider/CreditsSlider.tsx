import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./CreditsSlider.css";

export const CreditsSlider = () => {
    return (
        <div className="credits-slider">
            <div className="credits-slider-content">
                <FiChevronLeft className="arrow" />
                <div className="credits-content">
                    <span>
                        Diseña y Desarrollado por{" "}
                        <a href="#" className="link">Deandre</a>
                    </span>
                    <a href="#" className="store-link">Triafana STORE</a>
                </div>
                <FiChevronRight className="arrow" />


            </div>

        </div>
    );
};
