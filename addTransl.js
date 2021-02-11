function addTransl() {
    var tovocab = document.getElementById("tovocab").value;
    var transl = document.getElementById("transinput").value;
    var checkVocvab = document.getElementById(tovocab).innerHTML;
    document.getElementById("tovocab").value = "";
    document.getElementById("transinput").value = "";
    if (!checkVocvab.includes("=")) {
        document.getElementById(tovocab).innerHTML = document.getElementById(tovocab).innerHTML + " = " + transl;
    }
    
}