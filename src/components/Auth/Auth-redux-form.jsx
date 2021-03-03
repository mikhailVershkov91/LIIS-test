import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLength15, email } from "../utils/validators";
import s from "./Auth.module.css";

const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;

	return (
		<div className={`${s.formControl} ${hasError ? s.error : ""}`}>
			<div>
				<input {...input} {...props} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	);
};

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={s.formInputContainer}>
				<Field
					placeholder={"Loginnnn"}
					component={Input}
					name={"login"}
					validate={[required, maxLength15, email]}
					className={s.formInput}
				/>
			</div>
			<div className={s.formInputContainer}>
				<Field
					placeholder={"Password"}
					component={Input}
					name={"password"}
					validate={[required, maxLength15]}
					type={"password"}
					className={s.formInput}
				/>
			</div>
			<div>
				<button className={s.formButton}>Submit</button>
			</div>
		</form>
	);
};

const AuthReduxForm = reduxForm({
	form: "login",
})(LoginForm);

export default AuthReduxForm;
