import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE } from "../../../path/path";

import styles from "./Navbar.module.css";

export default function Navbar() {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.clear();
		navigate(LOGIN_PAGE);
	};

	return (
		<div className={styles.navbar}>
			<div className={styles.user}>
				<div className={styles.userAvatar}>
					<img
						className={styles.userAvatarImg}
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
						alt="user avatar"
					/>
				</div>
				<p className={styles.username}>Chisviet123</p>

				<div className={styles.options}>
					<div className={styles.optionContainer}>
						<button
							className={`button ${styles.buttonOption} ${styles.buttonEditProfile}`}
						>
							<i className="fa-solid fa-user-pen"></i>
							Edit Profile
						</button>
					</div>

					<div className={styles.optionContainer}>
						<button
							className={`button ${styles.buttonOption} ${styles.buttonDeleteAccount}`}
						>
							<i
								className="fa-solid fa-trash"
								style={{ marginRight: "15px" }}
							></i>
							Delete Account
						</button>
					</div>
				</div>
			</div>

			<button
				onClick={handleLogout}
				className={`button ${styles.buttonLogout}`}
			>
				Logout
			</button>
		</div>
	);
}
