let form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
        'Content-Type': "application/json"
        },
        body: JSON.stringify({
            first_name: e.target[0].value,
            last_name: e.target[1].value,
        })
    }).then((res) => console.log(res))
    .catch((err) => console.log(err))
})