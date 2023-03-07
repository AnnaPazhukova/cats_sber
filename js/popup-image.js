class PopupWithImage extends Popup {
    constructor(className) {
        super(className)
    }
    open(dataImage){
        const imagePopup = this._popupElement.querySelector('popup_image');
        imagePopup.src = dataImage;

        super.open()
    }
}