import React from "react";
import TextField from "@material-ui/core/TextField";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleIsAuth } from "../../store/auth-reducer";
import { loadTicketsAC } from "../../store/tickets-reducer";
import s from "./Main-page.module.css";
import logoutIcon from "../assets/logout.svg";
import arrow from "../assets/Vector.svg";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const MainPage = (props) => {
	const dispatch = useDispatch();

	const onInputChange = (e) => {
		dispatch(loadTicketsAC(e.target.value));
	};

	const onClick = () => {
		localStorage.removeItem("token");
		props.toggleIsAuth(false);
	};

	return (
		<div className={s.wrapper}>
			{props.isAuth && (
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
							Добавлено в Избранное: <span>{props.favorites}</span> рейсов
						</span>
					</div>

					<div className={props.tickets.data ? s.content__ticketItems : ""}>
						{props.tickets.data ? (
							<>
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
								<Card tickets={props.tickets} />
							</>
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

const mapStateToProps = (state) => ({
	tickets: state.tickets.tickets,
	isAuth: state.auth.isAuth,
	favorites: state.tickets.favorites,
});

const MainPageContainer = connect(mapStateToProps, {
	toggleIsAuth,
})(MainPage);

export default MainPageContainer;
