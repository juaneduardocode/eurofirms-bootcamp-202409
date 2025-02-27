fetch('http://localhost:8080/infos/674a1c86d6d145ad8b174727', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQxZjk3YTUwOTc2ZDcyYmU0NmZlODkiLCJpYXQiOjE3MzI5MDkxODd9.THR6QKaPDt0dFrkVjJKSGHqVzM1CpRm1KzKZffPDYXI'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))