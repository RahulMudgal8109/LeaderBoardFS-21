let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let country = document.getElementById("country");
let score = document.getElementById("score");
let addBtn = document.getElementById("addBtn");



let data = [];

addBtn.addEventListener('click', function () {
    output.innerHTML = " ";

    data.push({
        fName: fName.value,
        lName: lName.value,
        country: country.value,
        score: score.value,
    })
    sortArray(data);
    printOnUi(data);

})
function printOnUi(data) {
    output.innerHTML = " ";

    data.forEach((element, index) => {
        let div = document.createElement("div");
        div.innerHTML = ` <div class="col-1"></div>
                <div class="col-2" id="opFName">${element.fName}</div>
                <div class="col-2" id="opLName">${element.lName}</div>
                <div class="col-2" id="opLName">${element.country}</div>
                <div class="col-2" id="opScore">${element.score}</div>
                <div class="col-2 d-flex">
                    <button class="delete" id="delete" onclick=deleteItem(${index})><i class="fa fa-trash-o" style="color:black"></i></button>
                    <button class="add" id="add" style="color:black" onclick=addScore(${index})>+5</button>
                    <button class="minus" id="minus" style="color:black" onclick=minusScore(${index})>-5</button>
                </div>
                <div class="col-1"></div>`;
        div.classList.add("row");
        output.appendChild(div);

    })

}

function sortArray(data) {
    data.sort((a, b) => {
        return b.score - a.score
    })
    console.log(data);
}

function addScore(index) {
    data[index].score = parseInt(data[index].score) + 5
    // console.log(data[index].score);
    sortArray(data)
    printOnUi(data);
}
function minusScore(index) {
   
            data[index].score = parseInt(data[index].score) - 5
            // console.log(data[index].score);
            sortArray(data)
            printOnUi(data);
}
function deleteItem(index) {
   
    data.splice(index,1);
    // console.log(data[index].score);
    sortArray(data)
    printOnUi(data);
}

