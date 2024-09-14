const description = document.querySelector(".description__wrapper"),
  descriptionPlace = description.querySelector(".description__item--place"),
  descriptionTime = description.querySelector(".description__item--time");

fetch("experience.json")
  .then((response) => response.json())
  .then((json) => {
    carousel.addEventListener("mousedown", (pointer) => {
      if (pointer.target.closest(".carousel__item .carousel__item--text")) {
        json.forEach((element) => {
          if (
            pointer.target.innerHTML.toLowerCase() == element.name.toLowerCase()
          ) {
            description.style.display = "block";
            descriptionPlace.innerHTML = element.description;
            descriptionTime.innerHTML = element.worktime;
          }
        });
      }
    });
  });



carousel.addEventListener("mouseup", () => {
  
});
