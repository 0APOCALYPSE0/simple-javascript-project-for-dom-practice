var data = [
  {
      id: 0,
      name: "Janu",
      English: 50,
      Maths: 86,
      Science: 77,
      SocialScience: 88
  },
  {
      id: 1,
      name: "Thanu",
      English: 75,
      Maths: 96,
      Science: 67,
      SocialScience: 91
  },
  {
      id: 2,
      name: "Tara",
      English: 90,
      Maths: 35,
      Science: 86,
      SocialScience: 100
  },
  {
      id: 3,
      name: "Glen",
      English: 79,
      Maths: 68,
      Science: 77,
      SocialScience: 78
  },
  {
      id: 4,
      name: "Zara",
      English: 80,
      Maths: 85,
      Science: 96,
      SocialScience: 68
  }
]

let data1;

function createData(data){
  let table = document.getElementById("studentData");
  for(let i=0; i<data.length; i++){
    let tr = document.createElement('tr');
    let attr = document.createAttribute("id");
    attr.value = "row"+i;
    tr.setAttributeNode(attr);
    for(let x in data[i]){
      let td = document.createElement('td');
      let tdData;
      if(x === 'id'){
        tdData = document.createTextNode(i+1);
      }else{
        tdData = document.createTextNode(data[i][x]);
      }
      td.appendChild(tdData);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function removeData(){
  let table = document.getElementById("studentData");
  let length = table.children.length;
  for(let i=0; i<length; i++){
    document.getElementById("row"+i).remove();
  }
}

function onPageLoad() {
  // code goes here to display table on page loads
  createData(data);
}

function filterBy() {
  // code goes here to select filter by option
  let filterBy;
  if(document.getElementById("above").checked === true){
    filterBy = document.getElementById("above").value;
  }else if(document.getElementById("below").checked === true){
    filterBy = document.getElementById("below").value;
  }else if(document.getElementById("between").checked === true){
    filterBy = document.getElementById("between").value;
  }else{
    filterBy = "above";
  }
  return filterBy;
}

function Clear() {
  // code goes here to clear filter
  removeData();
  createData(data);
}

function filterClick() {
  // code goes here to handle filter button
  let subject = document.getElementById("subjects").value;
  let mark1 = document.getElementById("mark").value;
  // let mark2 = document.getElementById("maxMark").value;
  let mark2 = 100;
  let filter = filterBy();
  if(filter === 'above'){
    data1 = data.filter(res => {
      if(res[subject] > mark1){
        return true;
      }else{
        return false;
      }
    })
  }else if(filter === 'below'){
    data1 = data.filter(res => {
      if(res[subject] < mark1){
        return true;
      }else{
        return false;
      }
    })
  }else if(filter === 'between'){
    data1 = data.filter(res => {
      if(res[subject] > mark1 && res[subject] < mark2){
        return true;
      }else{
        return false;
      }
    })
  }
  if(subject !== '' && mark1 !== ""){
    removeData();
  }
  createData(data1);
}

