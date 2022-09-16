export const authenticate = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            id: "123-456-41",
            name: "Leandro Zalazar",
            email: "demo@smartassitance.com.ar",
            token: "token"
        });
    }, 2000)
})

