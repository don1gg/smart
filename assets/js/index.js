document.getElementById('open-modal-test').addEventListener("click" , function(){
    document.getElementById('my-modal').classList.add("open")
})

document.getElementById('close-my-modal-btn').addEventListener("click" , function(){
    document.getElementById('my-modal').classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

document.querySelector("#my-modal .modal-box").addEventListener('click', event => {
    event._isClickInModal = true;
});

document.getElementById("my-modal").addEventListener('click', event => {
    if(event._isClickInModal) return;
    event.currentTarget.classList.remove('open');
});

document.getElementById('open-modal-tell').addEventListener("click" , function(){
    document.getElementById('my-modals').classList.add("open")
})

document.getElementById('close-my-modal-btns').addEventListener("click" , function(){
    document.getElementById('my-modals').classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        document.getElementById("my-modals").classList.remove("open")
    }
});

document.querySelector("#my-modals .modal-boxs").addEventListener('click', event => {
    event._isClickInModal = true;
});

document.getElementById("my-modals").addEventListener('click', event => {
    if(event._isClickInModal) return;
    event.currentTarget.classList.remove('open');
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("nav").classList.toggle("open")
    })
});

const TOKEN = "6293514688:AAGEdTDKR4RcWSHMPMiJv0E7gs4jchNO-tw";
const CHAT_ID = "-1001918895160";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let message = `<b>Заявка с сайта!</b>\n`;
    message +=  `<b>Имя:</b> ${ this.name.value } \n`;
    message +=  `<b>Возраст:</b> ${ this.age.value } \n`;
    message +=  `<b>Номер телефона:</b> ${ this.phone.value } \n`;
    message +=  `<b>Уровень:</b> ${ this.level.value }`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })

    console.log(message)
})