let plus = document.querySelectorAll(".btn-plus"),
  minus = document.querySelectorAll(".btn-minus"),
  num = document.querySelectorAll(".count"),
  prix = document.querySelectorAll(".amount"),
  total = document.querySelector(".total-amount");
let a = 1;
let b = 60;

for (let i = 0; i < 2; i++) {
  plus[i].addEventListener("click", () => {
    a++;
    num[i].innerText = a;
    amount = b * a;
    prix[i].innerText = amount + "DT";

    console.log(a);
  });
  minus[i].addEventListener("click", () => {
    if (a > 1) {
      a--;
      num[i].innerText = a;
      amount = b * a;
      prix[i].innerText = amount + "DT";
    }
  });
}
