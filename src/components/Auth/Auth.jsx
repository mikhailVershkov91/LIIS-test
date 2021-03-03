import React from "react";
import s from "./Auth.module.css";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toggleIsAuth } from "../../store/auth-reducer";
import AuthReduxForm from "./Auth-redux-form";

const Auth = (props) => {
	const token = localStorage.getItem("token");

	props.toggleIsAuth(true); // непонятно зачем?

	if (token == null) {
		props.toggleIsAuth(false);
	}

	const onSubmit = (formData) => {
		if (formData.login === "test@test.ru" && formData.password === "123") {
			localStorage.setItem("token", "logged_in_already");
			props.toggleIsAuth(true);
			console.log("Yeeeeaaaah!");
		} else {
			alert("Email or password is incorrect");
		}
	};

	// if (props.isAuth === true) {
	// 	return <Redirect to={"/otp"} />;
	// }

	return (
		<div>
			<div className={`${s.standartSection} ${s.loginWrap}`}>
				<div className={s.container}>
					<h3 className={`${s.title} ${s.textCenter} ${s.textUppercase}`}>
						Login
					</h3>
					<div className={s.row}>
						<div className={s.col4}>
							<div className={s.item}>
								<div className={`${s.form} ${s.textCenter}`}>
									<AuthReduxForm onSubmit={onSubmit} />
								</div>
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
