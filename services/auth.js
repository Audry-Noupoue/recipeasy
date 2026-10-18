import User from '../models/users.js';

class AuthService {
  #currentUser = null;

  get currentUser() {
    return this.#currentUser;
  }

  async logIn(credentials) {
    this.#currentUser = null;

    const response = await fetch('http://martha.jh.shawinigan.info/queries/select-user-auth/execute', {
      method: 'POST',
      headers: {
        'auth': 'YXVkcnk6NjNGMzJlZjExY2I4YjhhNTc1MGNhNSphNjll',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) throw new Error('Erreur HTTP : ' + response.status);

    const resultat = await response.json();

    if (resultat.success && resultat.data?.length === 1) {
      const user = resultat.data[0];
      this.#currentUser = new User({ id: user.id, username: user.username });
    }

    return !!this.#currentUser;
  }

  logOut() {
    this.#currentUser = null;
  }
}

export default new AuthService();