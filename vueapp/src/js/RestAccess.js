function tabInsert() {
    let t=document.getElementById("ipTitulo").value;
    let l=document.getElementById("ipLink").value;
    let d=document.getElementById("ipDescripcion").value;
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "AAAAAAAAAAAAAAAAAAAAAAAAA",
      link: "https://www.youtube.com/watch?v=TeiS2flSvKw",
      descripcion: "alv we",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function onFormSubmit(){
    if(Validar()){
        var frmData = frmRead();
        console.log(frmData)
        if(curr==null)
            tabInsert(frmData);
        else
            tabUpdate(frmData);
        frmReset();
    }
}

function Validar() {
    isValid = true;
    if (document.getElementById("ipTitulo").value == ""){
        isValid = false;
        document.getElementById("ipTitulo").style.border='solid 1px red';
    }
    if (document.getElementById("ipLink").value == ""){
        isValid = false;
        document.getElementById("ipLink").style.border='solid 1px red';
    }
    if (document.getElementById("ipDescripcion").value == ""){
        isValid = false;
        document.getElementById("ipDescripcion").style.border='solid 1px red';
    }
    return isValid;
}

function frmRead(){
    var frmData = {};
    frmData["Titulo"]=document.getElementById("ipTitulo").value;
    frmData["Link"]=document.getElementById("ipLink").value;
    frmData["Descripcion"]=document.getElementById("ipDescripcion").value;
    return frmData;
}