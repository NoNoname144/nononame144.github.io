function addVocab() {
   
    var vocab = document.getElementById("vocabinput").value;

    if (vocab != null && vocab != " " && vocab != "") {
        document.getElementById("vocabinput").value = "";
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.id =vocab;
        li.appendChild(document.createTextNode(vocab));
        ul.appendChild(li);
        alert("Du hast das Wort " + vocab + " zu der Vokabelliste hinzugefügt!");
        if (document.getElementById("openWindowCheck").checked) {
            window.open('https://dict.leo.org/englisch-deutsch/' + vocab, '_blank');
        }
    }
}