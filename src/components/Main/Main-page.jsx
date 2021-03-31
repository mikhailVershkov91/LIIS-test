import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleIsAuth } from "../../store/auth-reducer";
import { loadTicketsAC } from "../../store/tickets-reducer";
import s from "./Main-page.module.css";
import logoutIcon from "../assets/logout.svg";
import arrow from "../assets/Vector.svg";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const MainPage = () => {
	const dispatch = useDispatch();
	const tickets = useSelector((state) => state.tickets.tickets);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const favorites = useSelector((state) => state.tickets.favorites);
	const cards = useSelector((state) => state.tickets.cards);

	const onInputChange = (e) => {
		dispatch(loadTicketsAC(e.target.value));
	};

	const onClick = () => {
		localStorage.removeItem("token");
		dispatch(toggleIsAuth(false));
	};

	return (
		<div className={s.wrapper}>
			{isAuth && (
				<div className={s.wrapper__logout}>
					<NavLink onClick={onClick} to={"/"}>
						Выйти
					</NavLink>
					<img src={logoutIcon} alt="выход" />
				</div>
			)}
			<div className={s.contentContainer}>
				<div className={s.content}>
					<div className={s.content__header}>
						<div className={s.content__path}>
							<span>Вылеты</span>
							<img src={arrow} alt="стрелка" />
							<span>SVO - JFK</span>
						</div>
						<form className={s.content__datePicker} noValidate>
							<TextField
								id="date"
								label="Departure"
								type="date"
								defaultValue="2021-05-24"
								className={s.content__textField}
								InputLabelProps={{
									shrink: true,
								}}
								onChange={onInputChange}
							/>
						</form>
					</div>
					<div className={s.content__carousel}>
						<Carousel />
					</div>
					<div className={s.content__favourites}>
						<span>
							Добавлено в Избранное: <span>{favorites}</span> рейсов
						</span>
					</div>

					<div className={tickets.data ? s.content__ticketItems : ""}>
						{tickets.data ? (
							cards.map((card, key) => (
								<Card key={card.id} card={card} tickets={tickets} />
							))
						) : (
							<span className={s.content__message}>
								Please select a departure date
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
