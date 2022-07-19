let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
let popupOpeneButtonElement = document.querySelector('.profile__edit-button');
let formElement = popupElement.querySelector('.popup__form');
let personName = document.querySelector('.profile__name');
let job = document.querySelector('.profile__description');
let nameInput = popupElement.querySelector('.popup__input_info_name');
let jobInput = popupElement.querySelector('.popup__input_info_job');



let openPopup = function () {
    popupElement.classList.add('popup_opened');
    nameInput.value = personName.textContent;
    jobInput.value = job.textContent;


};
let closePopup = function () {
    popupElement.classList.remove('popup_opened');
};

/* let closePopupByClickOnOverlay = function (event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return
    }
    closePopup();
} */
function formSubmitHandler(evt) {
    evt.preventDefault();
    personName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup();
}



popupOpeneButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
/* popupElement.addEventListener('click', closePopupByClickOnOverlay); */
formElement.addEventListener('submit', formSubmitHandler);



