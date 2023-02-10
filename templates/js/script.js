const form = document.getElementsByTagName('form');
const chatHistory = document.getElementsById('chathistory');
const userQuery = document.getElementById('user_query');

console.log(form);

form.addEventListen("submit", function(e) {
    e.preventDefault();
    console.log("I am clicked")
    const userContent = userQuery.value;
    const userMessage = document.createElement('div');
    userMessage.innerHTML = userContent;
 
    chatHistory.appendChild(userMessage);

    fetch('/chat', {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: `text=${userMessage}`
    })
    .then(response => response.text())
    .then(response => {
        const chatBotMessadgeDiv = document.createElement(div);
        chatBotMessadgeDiv.innerHTML(response);
        chatHistory.appendChild(chatBotMessadgeDiv);
    })

})