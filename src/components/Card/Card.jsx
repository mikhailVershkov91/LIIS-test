import React from "react";
import s from "./Card.module.css";
import planeEllipse from "../assets/plane-ellipse.svg";
import likeOff from "../assets/like_off.svg";
import likeOn from "../assets/like_on.svg";
import arrow from "../assets/arrow.svg";
import dash from "../assets/dash.svg";
import { useDispatch } from "react-redux";
import {
	activateLikeAC,
	deactivateLikeAC,
	decrementAC,
	incrementAC,
} from "../../store/tickets-reducer";

const Card = (props) => {
	const dispatch = useDispatch();

	const onClick = () => {
		if (props.card.likeIsActive === true) {
			dispatch(deactivateLikeAC(props.card.id));
			dispatch(decrementAC());
		} else {
			dispatch(activateLikeAC(props.card.id));
			dispatch(incrementAC());
		}
	};

	let depatureDate = new Date(
		props.tickets.data.Dates.OutboundDates[0].PartialDate
	)
		.toUTCString()
		.slice(5, 16);

	return (
		<div className={s.card}>
			<div className={s.container}>
				<div className={s.card__row}>
					<div className={s.card__main}>
						<div className={s.card__image}>
							<img src={planeEllipse} alt="самолет" />
						</div>
						<div className={s.card__info}>
							<div className={s.card__cities}>
								<span>Moscow (SVO)</span>
								<img src={arrow} alt="стрелка" />
								<span>New York (JFK)</span>
							</div>
							<div className={s.card__date}>
								<span>{depatureDate}</span>
								<img src={dash} alt="черта" />
								<span>
									{props.tickets.data.Dates.OutboundDates[0].QuoteDateTime.slice(
										11,
										-3
									)}
								</span>
							</div>
							<span className={s.card__company}>
								{props.tickets.data.Carriers[0].Name}
							</span>
						</div>
					</div>
					<div className={s.card__otherInfo}>
						<div className={s.card__likes} onClick={onClick}>
							{props.card.likeIsActive && <img src={likeOn} alt="сердце" />}
							{!props.card.likeIsActive && <img src={likeOff} alt="сердце" />}
						</div>
						<div className={s.card__ticketPrice}>
							<div className={s.card__price}>Price:</div>
							<div className={s.card__amount}>
								{props.tickets.data.Quotes[0].MinPrice} ₽
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
