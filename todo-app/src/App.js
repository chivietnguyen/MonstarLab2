import React from "react";
import Header from "./components/Header/Header";
import RegisterForm from "./components/Register/Register";
import LoginForm from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";

import { LOGIN_PAGE, REGISTER_PAGE } from "./path/path";

import "./normalize.css";
import "./form.css";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path={LOGIN_PAGE} element={<LoginForm />} />
				<Route path={REGISTER_PAGE} element={<RegisterForm />} />
			</Routes>
		</div>
	);
}

export default App;
