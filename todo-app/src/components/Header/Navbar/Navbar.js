import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../../App";
import { LOGIN_PAGE } from "../../../path/path";
import { deleteUser } from "../../../redux/apiRequest";

import styles from "./Navbar.module.css";

export default function Navbar() {
	const [userInfo, setUserInfo] = useContext(UserInfoContext);
	setUserInfo(localStorage.getItem("user"));

	const username = JSON.parse(localStorage.getItem("user"))?.username;
	const userId = JSON.parse(localStorage.getItem("user"))?.id;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.clear();
		navigate(LOGIN_PAGE);
	};

	const handleDeleteAccount = () => {
		deleteUser(userId, dispatch, navigate);
	};

	return (
		<>
			{userInfo && (
				<div className={styles.navbar}>
					<div className={styles.user}>
						<div className={styles.userAvatar}>
							<img
								className={styles.userAvatarImg}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
								alt="user avatar"
							/>
						</div>
						<p className={styles.username}>{username}</p>

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
									onClick={handleDeleteAccount}
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
			)}
		</>
	);
}
