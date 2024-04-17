export const getNumber = (inputText) => {
    return parseInt(inputText.toString().replace(/\D/g, ''));
}

export const formatPhoneNumber = (inputText) => {
    const stringNumber = getNumber(inputText).toString();
    return stringNumber.replace(/(\d{3})/, "$1 ").replace(/(\d{4})/, "$1-");
};

export const formatCodeNumber = (inputText) => {
    const stringNumber = inputText ? getNumber(inputText).toString() : "";
    return stringNumber.replace(/(\d)/g, "$1 \t\t").trimEnd();
};

export const getStringWithDigitsClean = (inputText) => {
    const stringDigits = getNumber(inputText);
    return stringDigits.toString();
}

export const getQueryParams = (params: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get(params);
}