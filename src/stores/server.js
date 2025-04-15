
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
    static mockFetch(url) {
        return new Mock();
    }


}

export class Mock {
    constructor() {
        this.data = null;
    }

    mock(data) {
        this.data = data;
        return this;
    }

    then(callback) {
        // Promise.resolve를 사용하여 비동기 동작 흉내내기
        Promise.resolve().then(() => {
            callback(this.data);
        });
        return this;
    }

    // 선택적으로 catch 메서드도 추가
    catch(callback) {
        // 이 Mock은 항상 성공하므로 catch는 호출되지 않지만,
        // 실제 fetch API와 유사하게 만들기 위해 추가
        return this;
    }

    // 선택적으로 finally 메서드도 추가
    finally(callback) {
        Promise.resolve().then(callback);
        return this;
    }
}