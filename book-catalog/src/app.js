import { fetchBooks } from "./api.js";
import { renderBooks, renderFavs } from "./ui.js";
import { toggleFavs, getFavs } from "./storage.js";

let currentSearchData = [];

export async function handleSearch(query) {
    if (!query.trim()) return;

    const container = document.querySelector('#book-results');
    container.innerHTML = '<p class="loader">Searching...</p>';

    currentSearchData = await fetchBooks(query);
    renderBooks(currentSearchData);
    renderFavs(getFavs(), currentSearchData);
}

document.addEventListener('click', (event) => {
    const btn = event.target.closest('.btn-add, .btn-remove');
    if (!btn) return;

    const id = btn.dataset.id;
    const bookData = currentSearchData.find(b => b.key === id) || 
                     getFavs().find(b => b.key === id);
    if (bookData) {
        toggleFavs(bookData);
    }                 
});

window.addEventListener('favsUpdated', (event) => {
    if (currentSearchData && currentSearchData.length > 0) {
        renderBooks(currentSearchData);
    }
    renderFavs(event.detail, currentSearchData);
});