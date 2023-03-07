class Card {
    #data;
    #selectorTemplate;
    #element;
    #handleClickCatImage;

    #getTemplate(){
        const template = document.querySelector(this.#selectorTemplate).content.querySelector('.card');
        return template;

    }

    constructor(data,selectorTemplate){
        this.#data = data;
        this.#selectorTemplate = selectorTemplate;
        this.#handleClickCatImage = handleClickCatImage;
    }

    getElement() {
        this.#element = this.#getTemplate().cloneNode(true);
        // наполняем карточку
        const cardTitleElement = this.#element.querySelector('.card__name');
        const cardImageElement = this.#element.querySelector('.card__image');
        const cardLikeElement = this.#element.querySelector('.card__like');

        cardTitleElement.textContent = this.#data.name;
        cardImageElement.src = this.#data.img_link;
        if(!this.#data.favorite) {
            cardLikeElement.remove()
        }

        function handleClickCatImage(dataSrc){
            popupImage.open(dataSrc);
        }

        cardImageElement.addEventListener('click', () => {
            this.handleClickCatImage(this.#data.img_link);
        })
        return this.#element;
    }
}