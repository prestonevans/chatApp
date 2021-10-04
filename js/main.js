const user1 = new User('crazyWaffles');
const user2 = new User('fresh4days');

const chats = [];

let currentChat = new Chat('PoGo');
currentChat.addMessage(new Message('hi!', user1.username));
currentChat.addMessage(new Message('hello', user2.username))

chats.push(currentChat);

function render() {
    //chats
    let chatHTML = '<ul class="list-group">';
    chats.forEach(chat => {
        chatHTML += `<li>${chat.name}</li>`
    });
    chatHTML += '</ul>';
    document.querySelector('#chat').innerHTML = chatHTML;
    let chatWindowHtml = document.querySelector('#chat-window');

    let chatWindowHtml = '';
    currentChat.messages.forEach(message => {
        chatWindowHtml += `
        <div class='chat-message'>${message.content}</div>
        div class='message-username'>${message.user1}</div>
        `
    });
}
render();

const button = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        document.body.innerHTML = 'Fudge';
    });
});

function addNewMessage() {
}
