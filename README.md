<div align="center">
 
# 🎬 CineVault

**A full-stack movie discovery web application powered by TMDB**

[![React](https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TMDB](https://img.shields.io/badge/API-TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

*Explore trending films, search titles, watch trailers, and dive deep into movie details — all in one place.*

[Live Demo](#) · [Report Bug](https://github.com/Souvik-Mukherjee58/cine-vault/issues) · [Request Feature](https://github.com/Souvik-Mukherjee58/cine-vault/issues)

</div>

---

## 🎬 See It In Action


#### 🏠 Home Page 

<img width="934" height="478" alt="HOMEPAGE2" src="https://github.com/user-attachments/assets/fe4825ec-c9ee-491b-ad3f-b8a317fd3110" />
 
#### 🔍 Search Results 
 
<img width="916" height="445" alt="search2" src="https://github.com/user-attachments/assets/26cb7e51-7757-4f92-a334-4878c6140001" />
 

#### 📄 Movie Details

<img width="840" height="882" alt="Screenshot 2026-06-10 231307" src="https://github.com/user-attachments/assets/c1974148-d6b0-4528-a904-5274c396deb4" />

#### 🎥 Trailer Player

<img width="926" height="481" alt="Trailer" src="https://github.com/user-attachments/assets/cddd9a71-6275-473d-9ac0-cb85de314b16" />

---

## ✨ Features

- 🔥 Discover **trending & popular** movies
- 🔍 **Search** movies by title
- 🎥 Watch **official trailers** in-app
- ⭐ View **ratings and reviews**
- 📅 Check **release dates**
- ⏱ See **runtime details**
- 🎭 Explore **genres**
- 📖 Read full **movie overviews**
- 🔒 **Secure backend** — TMDB API key never exposed to the client

---

## 🛠 Tech Stack

### 🎨 Frontend
| Technology | Purpose |
|---|---|
| React (Vite) | UI framework & fast builds |
| React Router | Client-side navigation |
| CSS3 | Styling & layout |

### ⚙️ Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | REST API server |
| CORS | Cross-origin request handling |
| dotenv | Secure environment variables |

### 🎞 External API
| API | Purpose |
|---|---|
| [TMDB](https://www.themoviedatabase.org/) | Movie data, trailers & images |

---

## 📂 Project Structure

```
CineVault/
├── Client/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── Server/
    ├── server.js
    ├── package.json
    └── .env
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js `v18+`
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Souvik-Mukherjee58/cine-vault.git
cd CineVault
```

---

### 🖥 Backend Setup

**Install dependencies:**
```bash
cd Server
npm install
```

**Configure environment variables:**

Create a `.env` file inside the `Server/` folder:
```env
PORT=5000
TMDB_API_KEY=your_tmdb_api_key
```

**Start the backend server:**
```bash
node server.js
```

> Backend runs at `http://localhost:5000`

---

### 🌐 Frontend Setup

**Install dependencies:**
```bash
cd Client
npm install
```

**Start the development server:**
```bash
npm run dev
```

> Frontend runs at `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/popular` | Fetch popular movies |
| `GET` | `/search?query=movie_name` | Search movies by title |
| `GET` | `/trailer/:id` | Get official trailer for a movie |
| `GET` | `/movie/:id` | Get full movie details |

---

## ⭐ Support

If you find this project useful, please consider giving it a **⭐ star** on GitHub — it really helps!
