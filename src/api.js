const config = {
    baseUrl: "https://cats.petiteweb.dev/api/single/annapazhukova",
    headers: {
      "content-type": "application/json",
    },
};
  
class Api {
    #getResponse(res) {
      return res.ok ? res.json() : Promise.reject();
    }
  
    #baseUrl;
    #headers;
  
    constructor(config) {
      (this.#baseUrl = config.baseUrl), (this.#headers = config.headers);
    }
  
    getAllCats() {
      return fetch(`${this.#baseUrl}/show`).then(this.#getResponse);
    }
  
    getCatById(idCat) {
      return fetch(`${this.#baseUrl}/show/${idCat}`).then(this.#getResponse);
    }
  
    getIdsCats() {
      return fetch(`${this.#baseUrl}/ids`).then(this.#getResponse);
    }
  
    addNewCat(data) {
      return fetch(`${this.#baseUrl}/add`, {
        method: "POST",
        headers: this.#headers,
        body: JSON.stringify(data),
      }).then(this.#getResponse);
    }
  
    updateCatById(idCat, data) {
      return fetch(`${this.#baseUrl}/update/${idCat}`, {
        method: "PUT",
        headers: this.#headers,
        body: JSON.stringify(data),
      }).then(this.#getResponse);
    }
  
    deleteCatById(idCat) {
      return fetch(`${this.#baseUrl}/delete/${idCat}`, {
        method: "DELETE",
      }).then(this.#getResponse);
    }
}
  
const api = new Api(config);