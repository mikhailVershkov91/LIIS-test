export const required = (value) => {
	if (value) return undefined;
	return "Field is required";
};

export const minLength8 = (value) => {
	if (value && value.length < 8)
		return "Min length should be at least 8 symbols";
	return undefined;
};

export const email = (value) => {
	if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
		return "Invalid email address";
	return undefined;
};

export const onlyLat = (value) => {
	if (value && /[а-яА-ЯёЁ]+/i.test(value)) return "Latin characters only";
	return undefined;
};
