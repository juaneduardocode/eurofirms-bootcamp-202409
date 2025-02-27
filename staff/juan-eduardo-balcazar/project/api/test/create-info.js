fetch('http://localhost:8080/infos', {
    method: 'INFO',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQxZjk3YTUwOTc2ZDcyYmU0NmZlODkiLCJpYXQiOjE3MzI5MDkxODd9.THR6QKaPDt0dFrkVjJKSGHqVzM1CpRm1KzKZffPDYXI',
        'Content-Type': 'application/json'
    },
    body: '{"text":"IA 2060 Activity rev1"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))