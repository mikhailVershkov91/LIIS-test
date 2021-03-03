import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { getTickets } from "../../store/tickets-reducer";
import { NavLink } from "react-router-dom";
import { toggleIsAuth } from "../../store/auth-reducer";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

const DatePickers = (props) => {
	const classes = useStyles();

	const onInputChange = (e) => {
		props.getTickets(e.target.value);
	};

	const onClick = () => {
		localStorage.removeItem("token");
		props.toggleIsAuth(false);
	};

	return (
		<div>
			<form className={classes.container} noValidate>
				<TextField
					id="date"
					label="Departure"
					type="date"
					defaultValue="2021-05-24"
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
					onChange={onInputChange}
				/>
			</form>
			{props.isAuth && (
				<NavLink onClick={onClick} to={"/"}>
					Logout
				</NavLink>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	tickets: state.tickets.tickets,
	isAuth: state.auth.isAuth,
});

let DatePickersContainer = connect(mapStateToProps, {
	getTickets,
	toggleIsAuth,
})(DatePickers);

export default DatePickersContainer;
