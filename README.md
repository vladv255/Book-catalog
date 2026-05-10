# Book Catalog Application

## Task
https://drive.google.com/file/d/1RBRcuH-_oAvtjem5Xs0c4NXZ8I38aYyH/view

## How to run the app
1. **Install dependencies:**
   `npm install`
2. **Development mode:**
   `npm run dev`
3. **Build production version:**
   `npm run build`
   *The optimized files (HTML, JS, and assets) will be generated in the `/dist` folder.*

## Project structure
- **public/**: Static resources like favicon.
- **src/assets/**: Icons and images used in the UI.
- **src/utils/**: Helper functions.
- **src/api.js**: API fetch logic for Open Library.
- **src/storage.js**: LocalStorage operations for Favorites.
- **src/ui.js**: DOM rendering functions.
- **src/app.js**: Core logic and event listeners.
- **src/main.js**: Application entry point and style imports.
- **src/style.css**: Mobile-first CSS styles.