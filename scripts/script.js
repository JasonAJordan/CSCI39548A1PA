


const list = document.body.querySelector("#list");

const add = document.body.querySelector("#add");

const remove = document.body.querySelector("#remove");

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

});

remove.addEventListener("click", () => {
  if (count == 0){
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

});