const divOne = document.getElementById("section-1");
divOne.addEventListener("click", check_section_1);

const divTwo = document.getElementById("section-2");
divTwo.addEventListener("click", check_section_2);

const divThree = document.getElementById("section-3");
divThree.addEventListener("click", check_section_3);

function check_section_1() {
  let sectionOne = document.getElementById("section-1");
  let sectionTwo = document.getElementById("section-2");
  let sectionThree = document.getElementById("section-3");
  let textOne = document.getElementById("text-1");
  let textTwo = document.getElementById("text-2");
  let textThree = document.getElementById("text-3");

  if (sectionOne.classList.contains("shrink")) {
    sectionOne.classList.replace("shrink", "grow");
    sectionOne.classList.replace("shadow-orange", "shadow-dark");
    sectionOne.setAttribute("aria-expanded", "true");
    sectionTwo.classList.replace("grow", "shrink");
    sectionTwo.classList.replace("shadow-dark", "shadow-pink");
    sectionTwo.setAttribute("aria-expanded", "false");
    sectionThree.classList.replace("grow", "shrink");
    sectionThree.classList.replace("shadow-dark", "shadow-blue");
    sectionThree.setAttribute("aria-expanded", "false");
    textOne.classList.replace("hide", "animate");
    textTwo.classList.remove("show");
    textThree.classList.replace("show", "hide");
    setTimeout(() => {
      document.getElementById("text-1").classList.add("show");
    }, 300);
    textOne.classList.add("animate");
  }
}

function check_section_2() {
  let sectionOne = document.getElementById("section-1");
  let sectionTwo = document.getElementById("section-2");
  let sectionThree = document.getElementById("section-3");
  let textOne = document.getElementById("text-1");
  let textTwo = document.getElementById("text-2");
  let textThree = document.getElementById("text-3");

  if (sectionTwo.classList.contains("shrink")) {
    sectionTwo.classList.replace("shrink", "grow");
    sectionTwo.classList.replace("shadow-pink", "shadow-dark");
    sectionTwo.setAttribute("aria-expanded", "true");
    sectionOne.classList.replace("grow", "shrink");
    sectionOne.classList.replace("shadow-dark", "shadow-orange");
    sectionOne.setAttribute("aria-expanded", "false");
    sectionThree.classList.replace("grow", "shrink");
    sectionThree.classList.replace("shadow-dark", "shadow-blue");
    sectionThree.setAttribute("aria-expanded", "false");
    textOne.classList.replace("show", "hide");
    textTwo.classList.remove("hide");
    textThree.classList.replace("show", "hide");
    setTimeout(() => {
      document.getElementById("text-2").classList.add("show");
    }, 300);
  }
}

function check_section_3() {
  let sectionOne = document.getElementById("section-1");
  let sectionTwo = document.getElementById("section-2");
  let sectionThree = document.getElementById("section-3");
  let textOne = document.getElementById("text-1");
  let textTwo = document.getElementById("text-2");
  let textThree = document.getElementById("text-3");

  if (sectionThree.classList.contains("shrink")) {
    sectionThree.classList.replace("shrink", "grow");
    sectionThree.classList.remove("shadow-blue");
    sectionThree.setAttribute("aria-expanded", "true");
    sectionOne.classList.replace("shadow-dark", "shadow-orange");
    sectionOne.classList.replace("grow", "shrink");
    sectionOne.setAttribute("aria-expanded", "false");
    sectionTwo.classList.replace("grow", "shrink");
    sectionTwo.classList.replace("shadow-dark", "shadow-pink");
    sectionTwo.setAttribute("aria-expanded", "false");
    textOne.classList.replace("show", "hide");
    textTwo.classList.replace("show", "hide");
    textThree.classList.remove("hide");
    setTimeout(() => {
      document.getElementById("text-3").classList.add("show");
    }, 300);
  }
}
