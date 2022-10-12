import React, { useEffect, useState } from "react";
import { LOGIN_PAGE } from "../../path/path";
import { Link, useNavigate } from "react-router-dom";
import {
	autoValidateUsernameWhenInputChange,
	autoValidatePasswordWhenInputChange,
	autoValidateConfirmPasswordWhenInputChange,
} from "../../validate/validate";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Instruction from "../Instruction/Instruction";

import styles from "./Register.module.css";
import { registerUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
	const [username, setUsername] = useState();
	const [validUsername, setValidUsername] = useState(false);
	const [usernameFocus, setUsernameFocus] = useState(false);

	const [password, setPassword] = useState();
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [confirmPassword, setConfirmPassword] = useState();
	const [validConfirmPassword, setValidConfirmPassword] = useState(false);

	const [errMsg, setErrMsg] = useState();
	const [success, setSuccess] = useState(false);
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
		autoValidateConfirmPasswordWhenInputChange(
			password,
			confirmPassword,
			setValidConfirmPassword
		);

		// Whenever dependencies change, errorMessage will be cleared
		setErrMsg("");
	}, [password, confirmPassword]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			username,
			password,
		};

		registerUser(newUser, dispatch, navigate, setErrMsg);
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className="form">
				<h1 className="form__title">Sign Up</h1>
				<p className="form__description">Become our new member!</p>

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

					<div className="input__field">
						<input
							className={validConfirmPassword ? "input" : "input input--error"}
							type="password"
							placeholder="Confirm password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						{/* instruction here */}
						<Instruction
							conditionToShowInstruction={
								confirmPassword && !validConfirmPassword
							}
							message="Please confirm your password!"
						/>
					</div>
				</div>

				<button className="button button--success" disabled={isSubmitting}>
					Sign up
				</button>

				<div className="form__navigation">
					<p>Already registered?</p>
					<Link to={LOGIN_PAGE}>Sign In</Link>
				</div>
			</form>
		</div>
	);
}
