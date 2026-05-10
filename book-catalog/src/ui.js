import { isFav } from "./storage.js";

const resultsContainer = document.querySelector('#book-results');

export function renderBooks(books) {
    resultsContainer.innerHTML = '';

    if (!books?.length) {
        resultsContainer.innerHTML = '<p class="error"> No books found. Please try a different search.</p>';
        return;
    }

    const cards = books.map (book => {
        const coverUrl = book.cover_i  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                                       : 'https://placeholder.com';
        const authors = book.author_name ? book.author_name.join(', ') : 'Unknown author';
        const isFavorite = isFav(book.key);
        
        return `
            <div class="book-card">
                <div class="book-card_img">
                    <img src="${coverUrl}" alt="${book.title}" loading="lazy">
                </div>
                <div class="book-card_info">
                    <h3 class="book-card_title">${book.title}</h3>
                    <p class="book-card_author">${authors}</p>
                    <p class="book-card_year">${book.first_publish_year || '-'}</p>
                    <button class="btn-add ${isFavorite ? 'active' : ''} "data-id="${book.key}">${isFavorite ? 'In favorites' : 'To favorites'}</button>
                </div>
            </div>
        `;
    }).join('');

    resultsContainer.innerHTML = cards;
}

export function renderFavs (favs) {
    const favContainer = document.querySelector('#favorites-list');
    const counter = document.querySelector('#fav-count');

    if (counter) counter.textContent = favs.length;

    if (favs.length === 0) {
        favContainer.innerHTML = '<p>No favorites yet</p>';
        return;
    }

    favContainer.innerHTML = favs.map(book => {
        const favCoverUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
                                         : 'https://placeholder.com';
        const authors = book.author_name ? book.author_name.join(', ') : 'Unknown author';
        const year = book.first_publish_year || '-';                                 
        return `
            <div class="fav-item">
                <img class="fav-img" src="${favCoverUrl}" alt="${book.title}" loading="lazy">
                <div class="fav-info">
                    <div class="fav-item_title">${book.title}</div>
                    <div class="fav-item_author">${authors}</div>
                    <div class="fav-item_year">${year}</div>
                </div>    
                <button class="btn-remove" data-id="${book.key}">Remove</button>
            </div>
        `}).join('');
}