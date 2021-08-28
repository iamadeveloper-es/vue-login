export default {
    getPatients: (state) => (id) => {
        state.users.filter((item) => item.role === 'patient' && item.doctor === id)
    }
}