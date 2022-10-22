document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  let rated = 0;
  const ratingParent = document.getElementById("selectRating");
  const ratingCard = document.getElementById("ratingCard");
  const thankyouCard = document.getElementById("thankyouCard");
  const ratedStars = document.getElementById("ratedStars");
  const submitBtn = document.getElementById("submitBtn");
  thankyouCard.style.display = "none";

  // event delegation
  if (ratingParent && submitBtn) {
    ratingParent.addEventListener("click", (event) => {
      rated = event.target.innerText;
      ratedStars.innerHTML = rated;

      const ratingel = Array.from(
        document.querySelectorAll(".cardOne__rating__element")
      );

      //removing active class & pointer events on all elements except the selected one
      ratingel.forEach((el, i) => {
        if (i + 1 !== rated) {
          el.classList.remove("cardOne__rating__active");
          el.style.pointerEvents = "auto";
        }
      });

      //   Adding active class to selected element and hiding the rating card
      //   to display the thankyou card
      event.target.classList.add("cardOne__rating__active");
      event.target.style.pointerEvents = "none";
    });

    submitBtn.addEventListener("click", (event) => {
      thankyouCard.style.display = "flex";
      ratingCard.style.display = "none";
    });
  }
});
