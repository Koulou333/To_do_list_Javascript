var addToDoButton = document.getElementById('addToDo');
var inputField = document.getElementById('inputField');
var toDoContainer = document.getElementById('toDoContainer');

addToDoButton.onclick = function(){
    // vérifier si l'input n'est pas valide
    if(inputField.value != ""){
        // si l'input n'est pas vide, créer un paragraphe
        var paragraph = document.createElement('p')
    }
    // valorisé ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value; 

    // stylisé le paragraphe
    paragraph.classList.add('paragraphe_style');

    // insérer le paragraph l'élément dans toDoContainer
    toDoContainer.appendChild(paragraph);

    // vidé l'input quand le paragraghe est ajoutée
    inputField.value = "";

    // barré le paragraphe quand on click dessus
    paragraph.addEventListener('click',function(){
        paragraph.classList.add('paragraph_click');
    })

    // supprimer la tache quand on double click sur la tache
    paragraph.addEventListener('dbclick',function(){
        toDoContainer.removeChild(paragraph)
    })
}