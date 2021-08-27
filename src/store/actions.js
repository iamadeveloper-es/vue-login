import Api from '../api/Api'
export default {
    getAllUsers({commit}){
        return Api.get('')
            .then(
                res => {
                    commit('GET_ALL_USERS', res)
                }
            )
            .catch(
                err => console.log(err)
            )
    },
    login({commit}, payload){
        commit('LOGIN', payload)
    },
    register({commit}, payload){
        commit('REGISTER', payload)
    },
    logOut({commit}){
        console.log('action')
        commit('LOG_OUT')
    },
    getDoctorById({commit}, payload){
        console.log(payload)
        commit('GET_DOCTOR_BY_ID', payload)
    }
}