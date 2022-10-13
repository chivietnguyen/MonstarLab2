import React, { useState, createContext } from "react";
import Header from "./components/Header/Header";
import RegisterForm from "./components/Register/Register";
import LoginForm from "./components/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";

import { LOGIN_PAGE, REGISTER_PAGE, TODO_PATH } from "./path/path";

import "./normalize.css";
import "./form.css";
import "./App.css";

export const UserInfoContext = createContext();

function App() {
	const [userInfo, setUserInfo] = useState(localStorage.getItem("user"));

	return (
		<div className="App">
			<UserInfoContext.Provider value={[userInfo, setUserInfo]}>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							userInfo ? (
								<Navigate to={TODO_PATH} />
							) : (
								<Navigate to={LOGIN_PAGE} />
							)
						}
					/>
					<Route path={LOGIN_PAGE} element={<LoginForm />} />
					<Route path={REGISTER_PAGE} element={<RegisterForm />} />
				</Routes>
			</UserInfoContext.Provider>
		</div>
	);
}

export default App;
