

const conta = {
    email: 'jeff@dev.com',
    password: '123456789',
    name:'Jeff Lima',
    balance: 2000.00
}
export const api = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})