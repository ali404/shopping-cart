export default {
    getMe: (url) => {
        return new Promise((res, rej) => {
            request
                .get('/api' + url)
                .end((err, payload) => {
                    if(err) {
                        reject(err)
                    }
                    else {
                        resolve(JSON.parse(payload.text))
                    }
                })
        })
    }

    getUser: (url, username) => {
        return new Promise((res, rej) => {
            request
                .get('/api' + url)
                .send({
                    username: username
                })
                .end((err, payload) => {
                    if(err) {
                        reject(err)
                    }
                    else {
                        resolve(JSON.parse(payload.text))
                    }
                })
        })
    }
}
