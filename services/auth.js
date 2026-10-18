import User from '../models/users.js';

class AuthService {
    #currentUser = null // ATTENTION, à utiliser judicieusement

    get currentUser() {
        return this.#currentUser
    }

    async signUp(credentials) {
        const response = await fetch("http://martha.jh.shawinigan.info/queries/insert-user/execute", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'auth': 'YXVkcnk6NjNGMzJlZjExY2I4YjhhNTc1MGNhNSphNjll'
            }
        }).then((r) => r.json())

        if (response.success)  {
            this.#currentUser = new User({ id: response.lastInsertId, username: credentials.username })
        }

        return !!this.#currentUser
    }

    async logIn(credentials) {
        const response = await fetch("http://martha.jh.shawinigan.info/queries/select-user-auth/execute", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'auth': 'YXVkcnk6NjNGMzJlZjExY2I4YjhhNTc1MGNhNSphNjll'
            }
        }).then((r) => r.json())

        if (response.success && response.data.length == 1)  {
            const user = response.data[0]

            this.#currentUser = new User({ id: user.id, username: user.username })
            console.log(JSON.stringify(this.#currentUser))
        } else {
            this.#currentUser = null
        }

        return !!this.#currentUser
    }

    logOut() {
      this.#currentUser = null
    }

}

const service = new AuthService();
export default service;