# Chat_App

A cross-platform real-time chat application built using **Node.js**, **Electron**, and **Android Studio**, designed to enable seamless communication between users across web and mobile platforms. This project was developed as a class project to explore full-stack development with real-time socket-based messaging.

## Features

- 🔁 **Real-Time Messaging** – Instant message delivery using WebSockets.
- 📱 **Cross-Platform** – Works on both desktop (Electron) and mobile (Android).
- 👥 **User Authentication** – Register and login functionality.
- 💬 **Message History** – View recent conversations.
- 📡 **Socket.IO Integration** – Backend powered by Node.js and Socket.IO for fast communication.

## Tech Stack

| Platform      | Technology                           |
|---------------|---------------------------------------|
| **Frontend**  | Electron (JavaScript), Android Studio (Java/Kotlin) |
| **Backend**   | Node.js, Express                      |
| **Real-Time** | Socket.IO                             |
| **Database**  | (Add your DB here, e.g. MongoDB, Firebase) |

## Folder Structure

```
Chat_App/
│
├── chat-app-android/        # Android client app
│   └── ...                  # Source code (Java/Kotlin)
│
├── chat-app-desktop/        # Electron desktop client
│   └── ...                  # Source code (JS, HTML, CSS)
│
├── server/                  # Node.js backend server
│   ├── index.js             # Main server entry
│   └── package.json
│
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Android Studio with emulator or physical device
- Electron (for desktop app development)
- Java JDK (for Android)
- Git

### Installation

#### 1. Clone the repository:

```bash
git clone https://github.com/Cheseria/Chat_App.git
cd Chat_App
```

#### 2. Run the Server

```bash
cd server
npm install
node index.js
```

#### 3. Run the Electron Desktop App

```bash
cd chat-app-desktop
npm install
npm start
```

#### 4. Run the Android App

- Open `chat-app-android` in Android Studio.
- Set your server URL in the Android code (usually in a constants/config file).
- Build and run on an emulator or connected device.

> ⚠️ Make sure your Android device and server are on the same network during development.

## Demo

*(Add screenshots or screen recordings here)*

## Future Improvements

- Push notifications
- Message encryption
- Group chat support
- Media sharing
- Chatbot integration

## Contributors

- **Cheseria M.** – Developer ([@Cheseria](https://github.com/Cheseria))

## License

This project is open-source and available under the [MIT License](LICENSE).
