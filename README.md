# MERN Chat App

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), featuring user authentication, private and group messaging.

## Features

- **Real-Time Messaging**: Instant communication using socket.io.
- **User Authentication**: Secure login and registration with JWT.
- **Private and Group Chats**: Support for both private and group conversations.
- **Responsive Design**: Works seamlessly on all devices.
- **User Profiles**: profiles with avatars.
- **Message Notifications**: Real-time notifications for new messages.

## Tech Stack

- **Frontend**: React.js, Redux, tailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using MongoDB Atlas)
- **Real-Time Communication**: Socket.io

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account and cluster set up

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/mern-chat-app.git
   cd mern-chat-app
   ```

2. **Install dependencies:**:

   ```bash
   npm install
   cd frontend
   npm install
   ```

3. **Set up environment variables**:

   ```bash
   PORT=5000
   MONGO_DB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SOCKET_PORT=your_socket_port
   NODE_ENV=development
   ```

4. **Run the application:**:

   ```bash
   npm run server
   cd frontend
   npm run dev
   ```

## Contributing

We welcome contributions to improve the MERN Chat App. To contribute, please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and is well-documented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
