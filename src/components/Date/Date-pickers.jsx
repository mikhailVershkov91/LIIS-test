import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { getTickets } from "../../store/tickets-reducer";

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

	return (
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
	);
};

const mapStateToProps = (state) => ({
	tickets: state.tickets.tickets,
});

let DatePickersContainer = connect(mapStateToProps, { getTickets })(
	DatePickers
);

export default DatePickersContainer;
