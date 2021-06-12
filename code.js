let irlandFlag = [
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
];

function displayFlag(flagArray) {
  //1.create a table element
  let flagTable = document.createElement("table");
  document.body.append(flagTable);
  //2 loop from zero to length of flagArray
  for (let rowNum = 0; rowNum < flagArray.length; rowNum++) {
    let rowArray = flagArray[rowNum];
    //create new tr element
    let rowEl = document.createElement("tr");
    flagTable.append(rowEl);
    //3 loop from zero to rowArray length
    for (let cellNum = 0; cellNum < rowArray.length; cellNum++) {
      // create new td and append to tr
      let colorPixel = document.createElement("td");
      colorPixel.classList.add("color" + rowArray[cellNum]);
      rowEl.append(colorPixel);
    }
  }
}

displayFlag(irlandFlag);
