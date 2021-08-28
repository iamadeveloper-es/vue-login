import Auth from '../logic/auth'
export default {
    GET_ALL_USERS(state, res){
        state.users = res.data
    },
    LOGIN(state, payload){
        Auth.deleteUserLogged(state)
        const {email, password, role} = payload
        const findUser = state.users.find(user => user.email === email && user.password === password && user.role === role)
        if(findUser != null){
            state.user = findUser
            Auth.setUserLogged(state, payload)
        }
        else{
            state.user = []
        }


    },
    REGISTER(state, payload){
        const {name, lastName, email, password, role} = payload
        const findUser = state.users.find(user => user.email === email)
        if(name === '' || lastName === '' || email === '' || password === '' || role === '' || findUser != null){
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
                    role: role
                }
            )
            state.isUserRegistered = true
        }
    },
    LOG_OUT(state){
        Auth.deleteUserLogged(state)
    },
    GET_DOCTOR_BY_ID(state, payload){
        const findDoctor = state.users.find(user => user.role === 'doctor' && user.id === payload)
        state.doctor = findDoctor
    },
    GET_PATIENTS(state, payload){
        state.patients = []
        return state.users.filter((user) => {
            if(user.role === 'patient' && user.doctorId === payload){
                return state.patients.push(user)
            }
        })
        
    }
}
