export const validateEmail = (email: string): boolean => {
    return true;
}

export const validatePassword = (password: string): boolean => {
    return true;
}

export const emailValidator = (email : string) => {
    if (!email) {
      return "Email is required";
    } else if (!new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(email)) {
      return "Invalid email address";
    }
    return "";
  };
