export const login = ({ email, password }) => {
    const delay = (0.7 + Math.random() * 2) * 1000

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (password === 'password123' && !!email) {
                resolve()
            } else {
                reject({ message: 'E-mail or password wrong' })
            }
        }, delay)
    })
}