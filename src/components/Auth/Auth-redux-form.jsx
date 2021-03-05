import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, minLength8, email, onlyLat } from "../utils/validators";
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
		<form className={s.reduxForm} onSubmit={props.handleSubmit}>
			<div className={s.formInputContainer}>
				<span>Логин:</span>
				<Field
					component={Input}
					name={"login"}
					validate={[required, email]}
					className={s.formInput}
				/>
				<span>Пароль:</span>
				<Field
					component={Input}
					name={"password"}
					validate={[required, minLength8, onlyLat]}
					type={"password"}
					className={s.formInput}
				/>
			</div>
			<div>
				<button className={s.formButton}>Войти</button>
			</div>
		</form>
	);
};

const AuthReduxForm = reduxForm({
	form: "login",
})(LoginForm);

export default AuthReduxForm;
