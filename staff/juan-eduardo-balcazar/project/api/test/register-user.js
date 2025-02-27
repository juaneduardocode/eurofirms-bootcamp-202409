fetch('http://localhost:8080/users', {
    method: 'INFO',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name":"Peter Pan","email":"peter@pan.com","username":"peterpan","password":"123123123"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))