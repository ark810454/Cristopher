
function videoPres(event){
    var vid= document.querySelector("#vid")
    var toggle= document.querySelector("#toggle")
        vid.style.display="flex";
        toggle.style.display="block";
        
}
function close(event){
    var vid= document.querySelector("#vid")
        vid.style.display="none";
        
        
}
const theme= [thirdtheme, firsttheme, secondtheme];

function saveFrameTheme(container, theme) {
  localStorage.setItem(container + "-theme", theme);
}


function applyDefaultTheme() {
  var defaultTheme = localStorage.getItem("defaultTheme");
  if (defaultTheme === "firsttheme") {
    firsttheme();
  } else if (defaultTheme === "secondtheme") {
    secondtheme();
  } else if (defaultTheme === "thirdtheme") {
    thirdtheme();
  }
}


function secondtheme(event){
    const first= document.querySelectorAll(".n1, .n2")
    var third= document.querySelector(".n3")
    const bg= document.querySelectorAll('.container, .label, .logo, .navItems li a, .links a, .topline, h1, .text, .texte, .th, .themes, .btn button,.btn button span, .btn button:last-child::before')
        bg[0].style.background="#3d535f";
        bg[1].style.color="#fff";
        bg[2].style.color="#fff";
        bg[3].style.color="#fff";
        bg[4].style.color="#fff";
        bg[5].style.color="#fff";
        bg[6].style.color="#fff";
        bg[7].style.color="#fff";
        bg[8].style.color="#fff";
        bg[9].style.color="#fff";
        
        bg[10].style.color="#fff";bg[11].style.color="#fff";bg[13].style.color="#fff";bg[12].style.color="#fff";bg[14].style.color="#fff";
        bg[15].style.color="#fff";
        bg[16].style.color="#fff";bg[17].style.color="#fff";bg[18].style.color="#fff";bg[19].style.color="#fff";bg[21].style.color="#3d535f";
        bg[22].style.color="#3d535f";
        bg[20].style.background="#fff";
        
        first[0].style.display="none";
        first[1].style.display="none";
        third.style.display="block";
        saveFrameTheme(bg, first[1]);
       return secondtheme;
}
function thirdtheme(event){
    const first= document.querySelectorAll(".n3, .n2")
    var third= document.querySelector(".n1")
    const bg= document.querySelectorAll('.container, .label, .logo, .navItems li a, .links a, .topline, h1, .text, .texte, .th, .themes, .btn button,.btn button span, .btn button:last-child::before')
        bg[0].style.background="#030a0e";
        bg[1].style.color="#fff";
        bg[2].style.color="#fff";
        bg[3].style.color="#fff";
        bg[4].style.color="#fff";
        bg[5].style.color="#fff";
        bg[6].style.color="#fff";
        bg[7].style.color="#fff";
        bg[8].style.color="#fff";
        bg[9].style.color="#fff";
        
        bg[10].style.color="#fff";bg[11].style.color="#fff";bg[13].style.color="#fff";bg[12].style.color="#fff";bg[14].style.color="#fff";
        bg[15].style.color="#fff";
        bg[16].style.color="#fff";bg[17].style.color="#fff";bg[18].style.color="#fff";bg[19].style.color="#fff";bg[21].style.color="#3d535f";
        bg[22].style.color="#fff";
        bg[20].style.background="#fff";
        
        first[0].style.display="none";
        first[1].style.display="none";
        third.style.display="block";
        saveFrameTheme("container", "thirdtheme");
       return thirdtheme;
}



function firsttheme(event){
    
    const first= document.querySelectorAll(".n3, .n1")
    var third= document.querySelector(".n2")
    const bg= document.querySelectorAll('.container, .label, .logo, .navItems li a, .links a, .topline, h1, .text, .texte, .th, .themes, .btn button,.btn button span, .btn button:last-child::before')
        bg[0].style.background="#fff";
        bg[1].style.color="#3d535f";
        bg[2].style.color="#3d535f";
        bg[3].style.color="#3d535f";
        bg[4].style.color="#3d535f";
        bg[5].style.color="#3d535f";
        bg[6].style.color="#3d535f";
        bg[7].style.color="#3d535f";
        bg[8].style.color="#3d535f";
        bg[9].style.color="#3d535f";
        
        bg[10].style.color="#3d535f";bg[11].style.color="#3d535f";bg[13].style.color="#3d535f";bg[12].style.color="#3d535f";bg[14].style.color="#3d535f";
        bg[15].style.color="#3d535f";
        bg[16].style.color="#3d535f";bg[17].style.color="#3d535f";bg[18].style.color="#3d535f";bg[19].style.color="#3d535f";bg[21].style.color="#fff";
        bg[22].style.color="#fff";
        bg[20].style.background="#3d535f";
        
        first[0].style.display="none";
        first[1].style.display="none";
        third.style.display="block";
        saveFrameTheme("container", "firsttheme");
        return firsttheme;
}
/* Récupérer le bouton de chaque thème
const themeButtons = document.querySelectorAll('.th .n1, .th .n2, .th .n3');

// Récupérer le thème actuel dans le stockage local, ou utiliser le thème par défaut
let currentTheme = localStorage.getItem(firsttheme());

// Appliquer le thème actuel à la page
applyTheme(currentTheme);

// Ajouter un gestionnaire d'événements à chaque bouton de thème
themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Récupérer le thème sélectionné depuis l'attribut "data-theme" du bouton
    const selectedTheme = button.dataset.theme;
    
    // Appliquer le thème sélectionné à la page
    applyTheme(selectedTheme);
    
    // Sauvegarder le thème sélectionné dans le stockage local
    localStorage.setItem(selectedTheme);
  });
});

// Fonction pour appliquer le thème à la page
function applyTheme(theme) {
  // Ajouter ou supprimer des classes CSS en fonction du thème sélectionné
  document.body.classList.remove(firsttheme(), secondtheme(), thirdtheme());
  document.body.classList.add(theme);
}*/







