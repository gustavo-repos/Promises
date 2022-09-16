// No Javascript, uma Promise é um objeto que retorna um valor

// Promises podem estar em 3 estados: Pending, Reject ou Fulfilled

// resolve e reject também são funções

const value = 2;

const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 3);
    console.log(random)
    if (random === value) {
        resolve('acertou!')
    }
    reject('wrong number')
})

console.log(promise)

// o método para acessar a resolve é then e, para a reject, é catch

promise.then((data) => console.log(data)).catch((err) => console.log(err))