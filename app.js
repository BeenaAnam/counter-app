let num = 0;
function incre() {
  num++;
  document.getElementById("count").innerText = num;
};
function reset() {
  let num = 0;
  document.getElementById("count").innerText = num;
};
function decre() {
  num--;
  document.getElementById("count").innerText = num;
};
