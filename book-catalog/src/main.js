import { handleSearch } from "./app.js";
import { renderFavs } from "./ui.js";
import { getFavs } from "./storage.js";
import { initTheme } from "./utils/theme.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#search-form');
    const input = document.querySelector('#search-input');

    initTheme();

    renderFavs(getFavs(), []);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        handleSearch(input.value);
    });
});