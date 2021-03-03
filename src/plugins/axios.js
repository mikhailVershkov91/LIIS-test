import axios from "axios";

const instance = axios.create({
	baseURL:
		"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-US/JFK-sky/SVO-sky/",
	headers: {
		"x-rapidapi-key": "db30e2ca2amsh8f6539960949c96p17247fjsnc41af8a6c425",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	},
});

export const ticketsAPI = {
	getTickets(date) {
		return instance.get(`${date}`).then((response) => response.data);
	},
};
