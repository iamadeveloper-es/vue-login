const clearError = (nodes, error) => {
    const inputs = document.querySelectorAll(nodes)
      inputs.forEach(input => {
        input.addEventListener('keydown', () => {
          error.status = false
        })
      })
}

export default {
    clearError
}