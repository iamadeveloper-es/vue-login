const getDoctorById = (state) => (id) => {
    state.users.filter((item) => {
        item.match(item.role === 'doctor' && item.id === id)
    })
}

export default {
    getDoctorById
}