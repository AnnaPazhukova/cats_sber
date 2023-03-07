const cardsContainer = document.querySelector('.cards');
const btnOpenPopup = document.querySelector('.btn');
const formCatAdd = document.querySelector('#popup-form-add');

const popupAdd = new Popup('popup-add');
const popupImage = new PopupWithImage('popup-cat-image');

function serializeForm(elements) {
    const formData = {};

    elements.forEach(input => {
        if(input.type === 'submit' || input.type === 'button') return;
        if(input.type === 'checkbox') {
            formData[input.name] = input.checked;
        }
        if(input.type !== 'checkbox') {
            formData[input.name] = input.value;
        }
    })
}

function handleFormCatAdd(e) {
    e.preventDefault();
    const elementsFormCat = [...formCatAdd.elements];
    constformData = serializeForm(elementsFormCat);

    const newElement = new Card(formData,'#card-template', handleClickCatImage);
    cardsContainer.prepend(newElement.getElement());

    popupAdd.close();
}
function handleClickCatImage(dataSrc){
    popupImage.open(dataSrc);
}


formCatAdd.addEventListener('submit', handleFormCatAdd, handleClickCatImage);

btnOpenPopup.addEventListener('click', (e) => {
    e.preventDefault();
    popupAdd.open()
})

popupAdd.setEventListener();
popupImage.setEventListener();



