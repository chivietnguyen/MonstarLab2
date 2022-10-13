import React, { useState, useEffect } from "react";
import { REGISTER_PAGE, TODO_PATH } from "../../path/path";
import { Link, useNavigate } from "react-router-dom";
import {
	autoValidateUsernameWhenInputChange,
	autoValidatePasswordWhenInputChange,
} from "../../validate/validate";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Instruction from "../Instruction/Instruction";

import styles from "./Login.module.css";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailed } from "../../redux/authSlice";

export default function LoginForm() {
	const [username, setUsername] = useState();
	const [validUsername, setValidUsername] = useState(false);
	const [usernameFocus, setUsernameFocus] = useState(false);

	const [password, setPassword] = useState();
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [errMsg, setErrMsg] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		autoValidateUsernameWhenInputChange(username, setValidUsername);

		// Whenever dependencies change, errorMessage will be cleared
		setErrMsg("");
	}, [username]);

	useEffect(() => {
		autoValidatePasswordWhenInputChange(password, setValidPassword);

		// Whenever dependencies change, errorMessage will be cleared
		setErrMsg("");
	}, [password]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const user = {
			username,
			password,
		};

		loginUser(user, dispatch, navigate, setErrMsg);
	};

	return (
		//  row
		<div className={styles.container}>
			<form className="form" onSubmit={handleSubmit}>
				<h1 className="form__title">Sign In</h1>
				<p className="form__description">Sign In and start manage your life!</p>

				<div className="form__group">
					{errMsg && <ErrorMessage errMsg={errMsg} />}

					<div className="input__field">
						<input
							className={validUsername ? "input" : "input input--error"}
							type="text"
							placeholder="Enter username"
							autoFocus
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							onFocus={() => setUsernameFocus(true)}
							onBlur={() => setUsernameFocus(false)}
						/>
						{/* instruction here */}
						<Instruction
							conditionToShowInstruction={
								usernameFocus && username && !validUsername
							}
							message="Username must be a word character!"
						/>
					</div>

					<div className="input__field">
						<input
							className={validPassword ? "input" : "input input--error"}
							type="password"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onFocus={() => setPasswordFocus(true)}
							onBlur={() => setPasswordFocus(false)}
						/>
						{/* instruction here */}
						<Instruction
							conditionToShowInstruction={passwordFocus && !validPassword}
							message="Use more than 6 characters for your password!"
						/>
					</div>
				</div>

				<button className="button button--success" disabled={isSubmitting}>
					Sign In
				</button>

				<div className="form__navigation">
					<p>Create new account?</p>
					<Link to={REGISTER_PAGE}>Sign Up</Link>
				</div>
			</form>
		</div>
	);
}
