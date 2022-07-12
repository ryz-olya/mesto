let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
let popupOpeneButtonElement = document.querySelector('.profile__open-popup');
let formElement = popupElement.querySelector('.popup__form');
let Name = document.querySelector('.profile__name');
let Job = document.querySelector('.profile__description');
let NameInput = popupElement.querySelector('.popup__input-name');
let JobInput = popupElement.querySelector('.popup__input-job');

NameInput.value = Name.textContent;
JobInput.value = Job.textContent;



let openPopup = function (event) {
    popupElement.classList.add('popup_opened');
    console.log('open popup clicked');
};
let closePopup = function () {
    popupElement.classList.remove('popup_opened');
};

let closePopupByClickOnOverlay = function (event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return
    }
    closePopup();
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    Name.textContent = NameInput.value;
    Job.textContent = JobInput.value;
    closePopup();
}



popupOpeneButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
formElement.addEventListener('submit', formSubmitHandler);



