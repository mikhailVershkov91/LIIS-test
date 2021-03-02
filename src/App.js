import "./App.css";
import DatePickers from "./components/Date/Date-pickers";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<div className="App">
			<DatePickers />
		</div>
	);
}

const MainApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default MainApp;
