import {getBooksFromStorage, removeBooksFromStorage } from './fantasy_storage.js';

const list = document.querySelector('.reviews'); 

const buildLibrary = () => {
    getReviewers().then(data => {

        const listItemElements = data.map(reviewer => {
            const listItem = document.createElement('div');
            listItem.setAttribute('class', 'fantasy_wrapper');

            const title = document.createElement('h1');
            title.textContent = reviewer.person.name;
            
            const poster = createPoster(reviewer.person.image.medium);
            
            
            listItem.appendChild(title);
            listItem.appendChild(poster)
             return listItem;
        })

        console.log(listItemElements)
        listItemElements.forEach(item => {
            list.appendChild(item);
        })
    });
   
    
}

const createPoster = (imgUrl) => {
    const image = document.createElement('img');
    image.setAttribute('src', imgUrl);
    image.classList.add('fantasy_poster'); 
    return image;
}



 const getReviewers =() => {
    
    const reviewers = fetch('http://api.tvmaze.com/shows/1/cast').then(data => data.json());
    console.log(reviewers)
    return reviewers;
}


const btn = document.querySelector('.reviewers-btn');
btn.onclick = () => {buildLibrary()}


