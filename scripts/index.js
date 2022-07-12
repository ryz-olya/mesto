let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
let popupOpeneButtonElement = document.querySelector('.profile__open-popup');
let FormElement = popupElement.querySelector('.popup__form');
let Name = document.querySelector('.profile__name');
let Job = document.querySelector('.profile__description');
let NameInput = popupElement.querySelector('.popup__input-name');
let NameJob = popupElement.querySelector('.popup__input-job');

NameInput.value = Name.textContent;






//const togglePopupVisibility = function(){
  //  popupElement.classList.toggle('popup_opened');

//}

//togglePopupVisibility();
//popupOpeneButtonElement.addEventListener('click', togglePopupVisibility);

let openPopup = function(event) {
    popupElement.classList.add('popup_opened');
    console.log('open popup clicked');
};
let closePopup = function() {
    popupElement.classList.remove('popup_opened');
};

let closePopupByClickOnOverlay = function(event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return
    }
    closePopup();
}
popupOpeneButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);



