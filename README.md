# 🎬 MovieFlix

**MovieFlix** is a movie browsing web app developed using React JS and Vite. It fetches real-time data from [The Movie Database (TMDb)](https://www.themoviedb.org/) and allows users to explore popular movies, view detailed information, mark favorites, and more.

This project was developed as part of my personal learning.

---

## 📌 Features

- 🔥 View the latest **popular movies** fetched directly from TMDb.
- ❤️ **Mark or unmark favorites** to keep track of movies you like.
- 🎯 **Filter by genre** to explore movies that match your interests.
- 📩 **Subscribe with your email** to get notifications (frontend only).
- 🌗 **Switch between light and dark mode** for better viewing experience.
- 📱 Responsive design and smooth UI
- 📝 **Detailed movie view**:
  - Overview
  - User Score
  - Duration
  - Cast
  - Genres
  - Budget, Revenue
  - Original Language
  - Production Companies

---

### 🛠️ Tech Stack
- Frontend: React (with Hooks and Context API)
- Styling: CSS
- API: The Movie Database (TMDb)

## ⚙️ How to Run This Project

> Make sure you have **Node.js** and **npm** installed.

### 1. Clone the Repository

```bash
git clone https://github.com/tanurims/movieflix.git
cd movieflix
cd frontend
npm install
```
### 2.Replace the API Key

Open the src/services/api.js file and replace the placeholder with your own TMDb API key.

```js
const API_KEY = "your_tmdb_api_key"; // Replace this with your actual TMDb API key
```

### 3.Run the App

```bash
npm run dev
```
















