function toggleMode() {
  const html = document.documentElement

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }

  // outra forma mais eficiente de fazer a troca de classe:.
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/profile/avatar.png")
  }
}
