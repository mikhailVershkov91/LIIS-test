import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect, useDispatch } from "react-redux";
// import { getTickets } from "../../store/tickets-reducer";
import { fetchTickets } from "../../saga/tickets-saga";
import { NavLink } from "react-router-dom";
import { toggleIsAuth } from "../../store/auth-reducer";
import { loadTicketsAC } from "../../store/tickets-reducer";
import s from "./Date-pickers.module.css";
import logoutIcon from "../assets/logout.svg";
import arrow from "../assets/Vector.svg";
import SimpleCard from "../Card/Card";

const useStyles = makeStyles((theme) => ({
	content__datePicker: {
		display: "flex",
		flexWrap: "wrap",
	},
	content__textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

const DatePickers = (props) => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const onInputChange = (e) => {
		// props.getTickets(e.target.value);
		// fetchTickets(e.target.value);
		fetchTickets(e.target.value);
		dispatch(loadTicketsAC());
	};

	// dispatch(loadTicketsAC());

	const onClick = () => {
		localStorage.removeItem("token");
		props.toggleIsAuth(false);
	};

	console.log(props.tickets);

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
					<div className={s.content__carousel}></div>

					<div className={s.content__favourites}>
						<span>
							Добавлено в Избранное: <span>10</span> рейсов
						</span>
					</div>

					<div className={s.content__ticketItems}>
						<SimpleCard />
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	tickets: state.tickets.tickets,
	isAuth: state.auth.isAuth,
});

let DatePickersContainer = connect(mapStateToProps, {
	// getTickets,
	toggleIsAuth,
})(DatePickers);

export default DatePickersContainer;
