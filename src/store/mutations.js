import Auth from '../logic/auth'
export default {
    GET_ALL_USERS(state, res){
        state.users = res.data
    },
    LOGIN(state, payload){
        Auth.deleteUserLogged(state)
        const {email, password} = payload
        const findUser = state.users.find(user => user.email === email && user.password === password)
        if(findUser != null){
            state.user = findUser
            Auth.setUserLogged(state, payload)
        }
        else{
            state.user = []
        }


    },
    REGISTER(state, payload){
        const {name, lastName, email, password} = payload
        const findUser = state.users.find(user => user.email === email)
        if(name === '' || lastName === '' || email === '' || password === '' || findUser != null){
            state.isUserRegistered = false
            return
        }
        else{
            state.users.push(
                {
                    id: state.users.length + 1,
                    name: name,
                    lastName: lastName,
                    email: email,
                    password: password,
                    role: 'patient'
                }
            )
            state.isUserRegistered = true
        }
    },
}
