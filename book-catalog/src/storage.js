const KEY = 'my_fav_books';

export const getFavs = () => JSON.parse(localStorage.getItem(KEY) || '[]');

export const isFav = (id) => getFavs().some(item => item.key === id);

export const toggleFavs = (book) => {
    let favs = getFavs();
    const index = favs.findIndex(item => item.key === book.key);

    if (index === -1) {
        favs.push(book);
    } else {
        favs.splice(index, 1);
    }

    localStorage.setItem(KEY, JSON.stringify(favs));

    window.dispatchEvent(new CustomEvent('favsUpdated', { detail: favs}));
    return favs;
}