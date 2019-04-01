import fantasyBooks from '../../assets/data.js'

const STORAGE_KEY = "books";

export const addBookToStorage = id => {
    const fantasyToAdd = fantasyBooks.find(book => book.id == id);
    const booksInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (booksInStorage){
        booksInStorage.push(fantasyToAdd); 
        localStorage.setItem(STORAGE_KEY, JSON.stringify(booksInStorage));
        } else {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([fantasyToAdd]));
        }
/*Zrobić na dodatkowe punkty tak, żeby nie było duplikatów (tablica powyżej). Usunąć duplikaty, wpisać kod pomiędzy linijką 10, a 11.*/

    }

export const getBooksFromStorage = () => {
    const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return dataStorage;
}

export const removeBooksFromStorage = (id) => {
    const booksOutFromStorage = getBooksFromStorage(); 
    const fantasyNewArray = booksOutFromStorage.filter(fantasy => fantasy.id != id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fantasyNewArray))
}
