let irlandFlag = [
  [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
  [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
  [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
  [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
  [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
  [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
  [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
];

function displayFlag(flagArray) {
  //1.create a table element
  let flagDiv = document.createElement("div");
  document.body.append(flagDiv);
  //2 loop from zero to length of flagArray
  for (let rowNum = 0; rowNum < flagArray.length; rowNum++) {
    let rowArray = flagArray[rowNum];
    //create new tr element
    let rowEl = document.createElement("ul");
    flagDiv.append(rowEl);
    //3 loop from zero to rowArray length
    for (let cellNum = 0; cellNum < rowArray.length; cellNum++) {
      // create new td and append to tr
      let colorPixel = document.createElement("li");
      colorPixel.classList.add("color" + rowArray[cellNum]);
      rowEl.append(colorPixel);
    }
  }
}

displayFlag(irlandFlag);
