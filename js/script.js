function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  const demo = document.getElementById("demo");
  const qty = Number(document.getElementById("qty").value);
  const titre = document.getElementById("titre").value;
  const contenu = document.getElementById("contenu").value;

  demo.innerHTML = "";

  for(let i = 0; i < qty; i++){
    const h2 = document.createElement("h2");
    h2.textContent = titre + " " + i;

    const p = document.createElement("p");
    p.textContent = contenu + " " + i;

    demo.appendChild(h2);
    demo.appendChild(p);
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  const couleur = document.getElementById("couleur").value;
   const demo = document.getElementById("demo");
  const paragraphes = demo.getElementsByTagName("p")

  for(let i = 0; i < paragraphes.length; i++){
    paragraphes[i].style.color = couleur;
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
}