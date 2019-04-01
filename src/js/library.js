import {getBooksFromStorage, removeBooksFromStorage } from './fantasy_storage.js';

const list = document.querySelector('.library'); 

const buildLibrary = () => {
    const favoriteBooks = getBooksFromStorage();

    const listItemElements = favoriteBooks.map(book => {
        const listItem = document.createElement('li');
        listItem.classList.add('fav_item');
        const title = document.createElement('p');


        const button = document.createElement('button')
        button.textContent = 'dislike'
        button.classList.add('dislike_button')
        button.onclick = () => {
            removeBooksFromStorage(book.id)

            while(list.firstChild) {
                list.removeChild(list.firstChild);
            }

            buildLibrary();
        };
        

        title.textContent = book.title;

        listItem.appendChild(title);
        listItem.appendChild(button);
        return listItem;
    })

    listItemElements.forEach(item => {
        list.appendChild(item);
    })
}

buildLibrary();
