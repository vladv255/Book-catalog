import { handleSearch } from "./app.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#search-form');
    const input = document.querySelector('#search-input');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        handleSearch(input.value);
    });
});