# Ping Me

A real-time chat and video calling application built with the **MERN Stack**, integrated with **Stream.io**, and styled using **Tailwind CSS** + **DaisyUI** (32+ themes).  
**Authenticated users** can update their profile once during registration, chat with friends using text, images, emojis, and engage in high-quality video calls with screen sharing and reactions.

---

## ✨ Features

- **One-time Profile Setup** after registration (immutable once set)
- **Friend Request System**
  - Send friend requests
  - Accept or reject requests
- **Real-Time Chat**
  - One-to-one conversations
  - Image sharing
  - Emoji reactions
  - Message replies
- **Video Calling via Stream.io**
  - Start/End video and audio
  - Screen sharing
  - Emoji reactions
- **32+ Theme Modes** with DaisyUI
- **Zustand** for global theme state management
- **TanStack Query** for efficient data fetching
- **Toast Notifications** using `react-hot-toast`
- **Fully Responsive UI** with Tailwind CSS

---

## 🚀 Demo

**Live:** [https://ping-me-rho.vercel.app](https://ping-me-rho.vercel.app)

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/DSaiTeja123/Ping-Me
cd pingme
```

2. **Install dependencies**

**Install client dependencies**
```bash
cd client
npm install
```

**Install server dependencies**
```bash
cd server
npm install
```

3. **Start the development server**

**Terminal 1 - start backend**
```bash
cd server
npm run dev
```

**Terminal 2 - start frontend**
```bash
cd client
npm run dev
```

4. **Open in your browser:**  
[http://localhost:5173](http://localhost:5173)

---

## 🛠️ Usage

- **Register/Login** to access Ping Me.
- **Update profile** once during registration (cannot change again).
- **Send and accept friend requests**.
- **Chat** in real time with text, images, and emojis.
- **Reply to messages** and use reactions.
- **Start video calls** with screen sharing and emoji reactions.
- **Switch between 32+ UI themes** powered by DaisyUI.
- **Persistent settings** with Zustand and TanStack Query.

---

## 🌓 Dark/Light Theme

- Toggle between 32+ themes using the theme selector.
- State managed using Zustand.
- DaisyUI integration for fully themed components.

---

## 🌐 Deployment

**Client (Frontend) on Vercel:**  
- Push the `client` folder to GitHub and import into Vercel.  
- Set the environment variables:
  - `VITE_SERVER_URL`
  - `VITE_STREAM_API_KEY`

**Server (Backend) on Render:**  
- Push the `server` folder to GitHub and import into Render.
- Set the following environment variables:
  - `PORT`
  - `MONGO_URI`
  - `JWT_SECRET_KEY`
  - `STEAM_API_KEY`
  - `STEAM_API_SECRET`
  - `CLIENT_URL`

---

## 🧩 Tech Stack

### Frontend

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TanStack React Query](https://tanstack.com/query/latest)
- [React Router](https://reactrouter.com/en/main)
- [React Hot Toast](https://react-hot-toast.com/)
- [Lucide React](https://lucide.dev/)
- [Axios](https://axios-http.com/)
- [Stream Chat React SDK](https://getstream.io/chat/docs/sdk/react/)
- [Stream Video React SDK](https://getstream.io/video/docs/react/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/)
- [dotenv](https://github.com/motdotla/dotenv)
- [CORS](https://github.com/expressjs/cors)
- [Cookie Parser](https://github.com/expressjs/cookie-parser)
- [Stream Chat Server SDK](https://getstream.io/chat/docs/sdk/node/)
