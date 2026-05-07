import { fetchBooks } from "./api.js";
import { renderBooks } from "./ui.js";

export async function handleSearch(query) {
    if (!query.trim()) return;

    const container = document.querySelector('#book-results');
    container.innerHTML = '<p class="loader">Searching...</p>';

    const books = await fetchBooks(query);
    renderBooks(books);
    
}