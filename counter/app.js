let count = 0;

const deger = document.querySelector("#sayac");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        console.log(styles);
        if (styles.contains("azalt")) {
            count--;
        } else if (styles.contains("artir")) {
            count++;
        } else count = 0;
        if (count > 0) {
            deger.style.color = "green";
        }
        if (count < 0) {
            deger.style.color = "red";
        }
        if (count === 0) {
            deger.style.color = "black";
        }
        deger.textContent = count;
    });
});