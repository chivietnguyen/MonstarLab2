import React, { useState, createContext } from "react";
import Header from "./components/Header/Header";
import RegisterForm from "./components/Register/Register";
import LoginForm from "./components/Login/Login";
import EditProfileForm from "./components/EditProfile/EditProfileForm";
import { Routes, Route, Navigate } from "react-router-dom";

import {
	EDIT_PROFILE_PAGE,
	LOGIN_PAGE,
	REGISTER_PAGE,
	TODO_PATH,
} from "./path/path";

import "./normalize.css";
import "./form.css";
import "./category.css";
import "./App.css";
import Todolist from "./components/Todolist/Todolist";

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
					<Route path={EDIT_PROFILE_PAGE} element={<EditProfileForm />} />
					<Route path={TODO_PATH} element={<Todolist />} />
				</Routes>
			</UserInfoContext.Provider>
		</div>
	);
}

export default App;
