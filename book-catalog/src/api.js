export async function fetchBooks(query) {
    try {
        const response = await fetch (`https://openlibrary.org/search.json?q=${query}`);

        if (!response.ok) {
            throw new Error ('Server error');
        }

        const data = await response.json();
        return data.docs;
    } catch (error) {
        console.error ('Request error: ', error.message);
        alert("Please, Check the internet connection!")
        return [];
    }
    
}