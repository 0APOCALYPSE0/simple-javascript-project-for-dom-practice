function selectCard(card) {
    // code goes here to select a card
    let section = document.getElementsByTagName("section")[0];
    for(let i=0; i<section.children.length; i++){
        section.children[i].id = '';
    }
    document.getElementsByClassName(card)[0].id = "selected";
    if(document.getElementById("delete").checked){
        deleteMode();
    }
    if(document.getElementById("editTitle").checked === true){
        document.getElementById("cardTitle").defaultValue = document.getElementById("selected").querySelector("h2").innerHTML;
    }
}

function addWork() {
    // code goes here for add work mode
  let mode = changeMode();
  let selectedCard = document.getElementById("selected");
  let ul;
  let length = 0;
  if(selectedCard.querySelector("ul") === null){
    ul = document.createElement("ul");
  }else{
    ul = selectedCard.querySelector("ul");
    length = selectedCard.querySelector("ul").children.length;
  }
  length++;
  let data = document.getElementById("work").value;
  if(mode === 'add' && data !== ''){
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.setAttribute("id", "deleteBtn"+length);
    btn.style.marginRight = "10px";
    btn.innerHTML = "X";
    btn.style.display = "none";
    btn.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    });
    let text = document.createTextNode(data);
    li.appendChild(btn);
    li.appendChild(text);
    ul.appendChild(li);
    selectedCard.appendChild(ul);
  }
  document.getElementById("work").value = '';
}

function deleteWork() {
    // code goes here to delete a work in a card

}

function update() {
    // code goes here to update card title
    let mode = changeMode();
    let selectedCard = document.getElementById("selected");
    let data = document.getElementById("cardTitle").value;
    if(mode === 'edit' && data !== ''){
        selectedCard.querySelector("h2").innerHTML = data;
    }
    document.getElementById("cardTitle").value = '';
    // let add = document.getElementById("addWork");
    // add.checked = true;
    // add.click();
}

function clearWorkList() {
    //code goes here to clear workList
    let card1 = document.getElementsByClassName('card1')[0].querySelector("ul");
    let card2 = document.getElementsByClassName('card2')[0].querySelector("ul");
    let card3 = document.getElementsByClassName('card3')[0].querySelector("ul");
    if(card1 !== null){
        card1.remove();
    }
    if(card2 !== null){
        card2.remove();
    }
    if(card3 !== null){
        card3.remove();
    }
}

function changeMode() {
  // code goes here switch between add work, update card title and delete work
  let option;
  if(document.getElementById("addWork").checked === true){
    option = document.getElementById("addWork").value;
  }else if(document.getElementById("editTitle").checked === true){
    option = document.getElementById("editTitle").value;
  }else if(document.getElementById("delete").checked === true){
    option = document.getElementById("delete").value;
  }else {
    option = "add";
  }
  if(option === 'add'){
    document.getElementById("add").style.display = "inline-block";
    document.getElementById("edit").style.display = "none";
    resetBtnStatus();
  }else if(option === 'edit'){
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "inline-block";
    document.getElementById("cardTitle").defaultValue = document.getElementById("selected").querySelector("h2").innerHTML;
    resetBtnStatus();
  }else if(option === 'delete'){
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "none";
    deleteMode();
  }
  return option;
}

function deleteMode() {
  // code goes here for delete Mode
    resetBtnStatus();
    let selected = document.getElementById("selected");
    for(let i=0; i<selected.querySelector("ul").children.length; i++){
        selected.querySelector("ul").children[i].querySelector("button").style.display = "inline-block";
    }

}

function resetBtnStatus(){
    let section = document.getElementsByTagName("section")[0];
    for(let i=0; i<section.children.length; i++){
        if(section.children[i].querySelector("ul") !== null){
            let ulList = section.children[i].querySelector("ul").children;
            for(let j=0; j<ulList.length; j++){
                ulList[j].querySelector("button").style.display = "none";
            }
        }
    }
}