"use strict";
const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");

sendButton.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    send();
  }
});

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  socket.emit("chatting", param);
}

sendButton.addEventListener("click", send);
// socket.emit("chatting", "from front")

socket.on("chatting", (data) => {
  console.log(data);
  const { name, msg, time } = data;
  const item = new LiModel(name, msg, time);
  item.makeLi();
  displayContainer.scrollTo(0, displayContainer, scrollHeight);
});

socket.on("chatting", (data) => {
  li.classList.add;
  chatList.appendChild(li);
});

function LiModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement("li");
    li.classList.add(nickname.value === this.name ? "sent" : "receive");
    const dom = `<span class="profile">
						<span class="user">${this.name}</span>
					</span>
					<span class="message">${this.msg}</span>
					<span class="item"> ${this.time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}
