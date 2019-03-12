const fetch = require("isomorphic-fetch");

function create(data) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch("http://localhost:3000/users", options)
        .then((response) => response.json)
}

create({ name: 'user1000' })