async function get() {

    let res = await fetch("http://localhost:3001/Todo");
    let data = await res.json()
    return data;
}

async function post(data) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch("http://localhost:3001/Todo", options)
        .then((response) => response.json)
}

async function patch(id, data) {
    console.log("patch")
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return fetch("http://localhost:3001/Todo/" + (id + 1), options)
        .then((response) => response.json)
}
