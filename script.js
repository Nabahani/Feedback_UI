const containerEl = document.getElementById("wrapper");
const ratingEls = document.querySelectorAll(".rating");
const btnEL = document.getElementById("btn");


let feedback = "";

ratingEls.forEach((rating) => {
    rating.addEventListener("click", (event) => {
        removeActive();

        rating.classList.add("active");
        feedback = event.target.innerText || event.target.parentNode.innerText;

    })
})


btnEL.addEventListener("click", () => {
    if (feedback !== "") {
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${feedback}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})



function removeActive() {
    ratingEls.forEach((rating) => {
        rating.classList.remove("active");
    })
}