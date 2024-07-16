// utils.js
export const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@pau\.edu\.ng$/;
    return regex.test(email);
};
