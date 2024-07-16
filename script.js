//fonction qui ajoute la valeur lorsque que le bouton est déclenché
function appendToDisplay(value){
    document.getElementById('display').value += value;
}

//function qui efface l'affichage quand le bouton "C" est déclenché
function clearDisplay(){
    document.getElementById('display').value = '';
}

//fonction qui va évaluer l'expression dans l'affichage et affiche le résultat en utilisant eval(). Si une erreur se produit, "Erreur" est affiché.
function calculateResult(){
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch(error){
        document.getElementById('display').value = 'Erreur';
    }
}

