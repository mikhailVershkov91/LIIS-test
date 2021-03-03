export const required = (value) => {
	if (value) return undefined;
	return "Field is required";
};

export const maxLength15 = (value) => {
	if (value && value.length > 15) return "Max length is 15 symbols";
	return undefined;
};

export const maxLength5 = (value) => {
	if (value && value.length > 5) return "Max length is 5 symbols";
	return undefined;
};

export const email = (value) => {
	if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
		return "Invalid email address";
	return undefined;
};

export const number = (value) => {
	if (value && isNaN(Number(value))) return "Must be a number";
	return undefined;
};
