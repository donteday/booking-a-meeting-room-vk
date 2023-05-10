const floorList = document.querySelector(".floor");
const roomList = document.querySelector(".room");
const result = document.querySelector(".result");
const date = document.querySelector(".date");
const timeStart = document.querySelector(".time__start");
const timeEnd = document.querySelector(".time__end");
const towerList = document.querySelector(".tower");
const select = document.getElementsByTagName("select");


const floors = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"];
const rooms = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

document.addEventListener("mouseup", updateResult);

init();

function init() {
    for (let i = 0; i < floors.length; i++) {
        const option = document.createElement("option");
        option.text = floors[i];
        floorList.add(option);
    }

    for (let i = 0; i < rooms.length; i++) {
        const option = document.createElement("option");
        option.text = rooms[i];
        roomList.add(option);
    }

    updateResult();
    //result.innerHTML = 'Ждемс...';
}


function updateResult() {
    result.innerHTML = `Вы хотите забронировать переговорную в башне "${towerList.value}"
    <br>${floorList.value} этаж
    <br>Комната #${roomList.value}
    <br>${date.value} c ${timeStart.value} по ${timeEnd.value}
    <br>Статус: свободно`;
}

document.querySelector('.button__accept').addEventListener('click', function () {
    const formData = {
        tower: document.querySelector(".tower").value,
        floor: document.querySelector(".floor").value,
        room: document.querySelector(".room").value,
        date: document.querySelector(".date").value,
        timeStart: document.querySelector(".time__start").value,
        timeEnd: document.querySelector(".time__end").value,
        comment: document.querySelector(".comment").value
    };
    console.log(JSON.stringify(formData));
});
