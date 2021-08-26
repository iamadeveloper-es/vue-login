import Cookies from "js-cookie";


//Save Logged user
const setUserLogged = (state, payload) => {
    const {email} = payload
    Cookies.set("userLogged", email)
    state.isUserLogged = true
    
}

const getUserLogged = () => {
    Cookies.get("userLogged")
}

const deleteUserLogged = (state) => {
    Cookies.remove('userLogged')
    state.isUserLogged = false
}
export default {
    setUserLogged,
    getUserLogged,
    deleteUserLogged
}