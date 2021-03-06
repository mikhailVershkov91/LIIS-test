import React from "react";
import s from "./Auth.module.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toggleIsAuth } from "../../store/auth-reducer";
import AuthReduxForm from "./Auth-redux-form";

const Auth = (props) => {
	const token = localStorage.getItem("token");

	if (token == null) {
		props.toggleIsAuth(false);
	}

	const onSubmit = (formData) => {
		if (formData.login === "test@test.ru" && formData.password === "12345678") {
			localStorage.setItem("token", "logged_in_already");
			props.toggleIsAuth(true);
		} else {
			alert("Email or password is incorrect");
		}
	};

	if (props.isAuth === true) {
		return <Redirect to={"/main"} />;
	}

	return (
		<div>
			<div className={s.wrapper}>
				<div className={s.content}>
					<div className={s.loginArea}>
						<div className={s.container}>
							<div className={s.loginArea__title}>Simple Flight Check</div>
							<div className={s.loginArea__form}>
								<AuthReduxForm onSubmit={onSubmit} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { toggleIsAuth })(Auth);
