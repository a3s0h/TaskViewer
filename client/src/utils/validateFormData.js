export const ValidateData = (email,password) =>{

    const isEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    // if(name !== null)
    // {
    //     if(name.trim() === "")return "Name is required";
    // }

    if(!isEmail) return "Email Id is not valid";
    if(!isPassword) return "Password is not valid";

    return null;

}