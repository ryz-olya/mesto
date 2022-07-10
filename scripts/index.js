

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpeneButtonElement = document.querySelector('.profile__open-popup');
console.log(popupOpeneButtonElement);

//const togglePopupVisibility = function(){
  //  popupElement.classList.toggle('popup_opened');

//}

//togglePopupVisibility();
//popupOpeneButtonElement.addEventListener('click', togglePopupVisibility);

const openPopup = function(event) {
    popupElement.classList.add('popup_opened');
    console.log('open popup clicked');
};
const closePopup = function() {
    popupElement.classList.remove('popup_opened');
};

const closePopupByClickOnOverlay = function(event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return
    }
    closePopup();
}
popupOpeneButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
