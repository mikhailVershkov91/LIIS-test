import React from "react";
import s from "./Carousel.module.css";
import image1 from "../assets/city_img1.png";
import image2 from "../assets/city_img2.png";
import image3 from "../assets/city_img3.png";

const Carousel = () => {
	return (
		<div className={s.slider}>
			<div className={s.slides}>
				<div className={s.slide}>
					<img src={image1} alt="карусель" />
				</div>
				<div className={s.slide}>
					<img src={image2} alt="карусель" />
				</div>
				<div className={s.slide}>
					<img src={image3} alt="карусель" />
				</div>
				<div className={s.slide}>
					<img src={image1} alt="карусель" />
				</div>
			</div>
		</div>
	);
};

export default Carousel;
