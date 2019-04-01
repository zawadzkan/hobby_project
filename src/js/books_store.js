import fantasyBooks from '../../assets/data.js';
import {  addBookToStorage } from './fantasy_storage.js'

console.log(fantasyBooks);

const section = document.querySelector('.books_store');

const createPublishingHouse = (publishingHouse) => {
    const cardPublishingHouse = document.createElement('p')
    cardPublishingHouse.textContent = publishingHouse
    cardPublishingHouse.classList.add('fantasy_publishingHouse')
    return cardPublishingHouse;
}

const createFavoriteButton = (onClickFn) => {
    const button = document.createElement('button')
    button.textContent = 'like'
    button.classList.add('like_button')
    button.onclick = onClickFn;
    return button; 
}


const createTitleElement = (title, theYearOfPublishment) => {
    const cardTitleElement = document.createElement('h1');
    cardTitleElement.textContent = `${title} (${theYearOfPublishment})`; 
    return cardTitleElement;
}

const createPoster = (imgUrl) => {
    const image = document.createElement('img');
    image.setAttribute('src', imgUrl);
    image.classList.add('fantasy_poster'); 
    return image;
}


const fantasyCardElements = fantasyBooks.map(fantasyBook => {
    const fantasyWrapper = document.createElement('div');

    fantasyWrapper.setAttribute('class', 'fantasy_wrapper');

    fantasyWrapper.appendChild(createTitleElement(fantasyBook.title, fantasyBook.theYearOfPublishment))
    fantasyWrapper.appendChild(createPoster(fantasyBook.cover));
    fantasyWrapper.appendChild(createPublishingHouse(fantasyBook.publishingHouse));
    
    fantasyWrapper.appendChild(createFavoriteButton(
        () =>  addBookToStorage (fantasyBook.id)
    ));
    
    return fantasyWrapper;
});

fantasyCardElements.forEach(element => section.appendChild(element));

console.log(fantasyCardElements);

