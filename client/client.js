// Connect to the server
const socket = io("http://localhost:5000");

// Load audio notification
const audio = new Audio("./assets/notify.mp3");

// DOM elements
const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");
const greetFriends = document.querySelector(".greet-friends");

let userName;
do {
  userName = prompt("Please, Enter your name to join");
} while (!userName || userName.trim() === "");

// connection
socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
});

socket.emit("new-user-joined", userName);

// make append messages to the chat container
const appendMessage = (message, position) => {
  greetFriends.style.display = "none";
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message", position);
  messageContainer.appendChild(messageElement);

  if (position === "left") {
    audio.play();
  } else {
    messageElement.classList.add("sent-msg"); // green color for sent message
  }
};

// message sent by user
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = messageInput.value;
  if (message.length < 1) {
    alert("Please write some message before send!");
    return;
  }

  appendMessage(`You: ${message}`, "right");
  socket.emit("send", message);
  messageInput.value = "";
});

socket.on("user-joined", (name) => {
  appendMessage(`${name} joined the chat`, "left");
});

socket.on("receive", (data) => {
  appendMessage(`${data.name}: ${data.message}`, "left");
});

socket.on("left", (name) => {
  appendMessage(`${name} left the chat`, "left");
});
