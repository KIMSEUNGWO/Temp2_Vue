
export class Server {
    static server = 'https://localhost:8080';

    static fetchPost(url, json) {
        return fetch(Server.server + url , { method : 'post'
                , headers : {'Content-Type' : 'application/json'}
                , body : JSON.stringify(json)
            })
                .then(res => res.json())
    }

    static fetchGet(url) {
        return fetch(Server.server + url)
            .then(res => res.json());
    }
}