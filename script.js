function tooglemode(){
  const html = document.documentElement

  const img = document.querySelector('#profile img')
  html.classList.toggle('light')
  if(html.classList.contains('light')){
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Personagem Frieren do anime Frieren e a Jornada para o Além, com  o ceu de dia"
    )
  }else{
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute(
      "alt",
      "Personagem Frieren do anime Frieren e a Jornada para o Além, com  o ceu de noite"
    )
  }
}