//bubble sort;
function bSort() {
  let v = prompt("Give me random numbers?");
  let x = v.split(",");
  for (let i = 0; i < x.length; i++) {
    for (let y = 0; y < x.length; y++) {
      if (x[y] * 1 > x[y + 1] * 1) {
        let n = x[y] * 1;
        x[y] = x[y + 1] * 1;
        x[y + 1] = n;
      }
    }
  }
}

//merge sort
