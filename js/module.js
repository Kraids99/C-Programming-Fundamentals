function modulToggle(id) {
  const dots = document.getElementById(`dots-${id}`);
  const more = document.getElementById(`more-${id}`);
  const btn = document.getElementById(`myBtn-${id}`);
  const img = document.getElementById(`mainImg-${id}`);
  const wrapper = document.getElementById(`imgWrapper-${id}`);
  const mainPart = document.getElementById(`main${id}`);

  const isExpanded = dots.style.display === "none";

  if (isExpanded) {
    dots.style.display = "inline";
    more.style.display = "none";
    btn.innerText = "Read More";

    wrapper.classList.remove("centered");
    img.classList.remove("centered-zoom");
    mainPart.classList.remove("readmore-active");
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    btn.innerText = "Read Less";

    wrapper.classList.add("centered");
    img.classList.add("centered-zoom");
    mainPart.classList.add("readmore-active");
  }
}


// Scroll ke atas tombol muncul
window.addEventListener("scroll", function () {
  const myID = document.getElementById("goup");
  if (window.scrollY >= 600) {
    myID.classList.add("show");
    myID.classList.remove("hide");
  } else {
    myID.classList.add("hide");
    myID.classList.remove("show");
  }
});

// Search modul
// function searchModules() {
//   const input = document.getElementById("searchInput").value.toUpperCase();
//   const modules = document.getElementsByClassName("blog-main");
//   const noResult = document.getElementById("noResultMessage");
//   let matchCount = 0;

//   for (let i = 0; i < modules.length; i++) {
//     const text = modules[i].innerText.toUpperCase();
//     if (text.includes(input)) {
//       modules[i].style.display = "";
//       matchCount++;
//     } else {
//       modules[i].style.display = "none";
//     }
//   }

//   noResult.style.display = matchCount === 0 ? "block" : "none";
// }

function searchModules() {
  const input = document.getElementById("searchInput").value.toUpperCase();
  const modules = document.getElementsByClassName("blog-main");
  const noResult = document.getElementById("noResultMessage");
  let matchCount = 0;

  for (let i = 0; i < modules.length; i++) {
    const title = modules[i].querySelector("h2").innerText.toUpperCase(); // hanya cek judul modul
    if (title.includes(input)) {
      modules[i].style.display = "";
      matchCount++;
    } else {
      modules[i].style.display = "none";
    }
  }

  if (noResult) {
    noResult.style.display = matchCount === 0 ? "block" : "none";
  }
}
