


const list = document.body.querySelector("#list");

const add = document.body.querySelector("#add");

const remove = document.body.querySelector("#remove");

const image = document.body.querySelector("#image");

let count = 1;

add.addEventListener("click", () => {
  if (count == 0){
    remove.classList.remove('pseudoNOCLICKbuttons');
    remove.classList.add('pseudobuttons');
    remove.classList.add('pseudobuttons2');
  }
  count = count + 1;

  // console.log("TEST");
  let newli = document.createElement("li");
  let txt = document.createTextNode(count + " Cat");
  newli.appendChild(txt);

  list.appendChild(newli);
  let count2 = ((count - 1) % 6) + 1 
  image.src = "../images/" + count2 + ".png";
  // console.log("../images/" + count2 + ".png");

});

remove.addEventListener("click", () => {
  if (count == 0){
    image.src = "../images/" + 0 + ".png";
    return;
  }
  let lastItem = list.lastElementChild;
  list.removeChild(lastItem);
  count = count - 1;
  if (count == 0){
    remove.classList.add('pseudoNOCLICKbuttons');
    remove.classList.remove('pseudobuttons');
    remove.classList.remove('pseudobuttons2');
  }

  
  let count2 = ((count - 1) % 6) + 1 
  image.src = "../images/" + count2 + ".png";
  // console.log("../images/" + count2 + ".png");

});