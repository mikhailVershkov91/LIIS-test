import React from "react";
import "./App.css";
import MainPageContainer from "./components/Main/Main-page";
import { Provider } from "react-redux";
import store from "./store/store";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Route exact path="/" render={() => <Auth />} />
			<Route path="/main" render={() => <MainPageContainer />} />
		</div>
	);
}

const MainApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	);
};

export default MainApp;
