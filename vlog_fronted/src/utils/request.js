export default class Request {
    post(path, body) {
        return new Promise(((resolve, reject) => {
            fetch('127.0.0.1'+path, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {'Content-type': 'Application/json'},
                body: JSON.stringify(body),
            }).then(response => resolve(response.json())).catch(error => reject(error))
        }))
    }
}