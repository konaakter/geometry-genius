function elemetsvalue(element){
    const elemetsfild = document.getElementById(element);
    const elementstring = elemetsfild.value;
    const elementsnumber = parseFloat(elementstring);
    elemetsfild.value = ' ';

    if (isNaN(parseFloat(elementsnumber))|| elementsnumber <= 0) {
        alert('Input a right number');
        return;
    }
    else{
        return elementsnumber;
    }
}



/****************************new tbale create********************* */
function tabletotalcostdisplay(nam, areatotal){
    const container =  document.getElementById("table-containe");
    const tr = document.createElement("tr");

    if (isNaN(areatotal)) {
        return;
    }    
    tr.innerHTML = `
       <td>${serial}</d>
       <td>${nam}</td>  
       <td>${areatotal} <sup>2</sup> cm</td>
       <td><button class="btn btn-info ">Covert to m<sup>2</sup></button></td>
    
    `;
    container.appendChild(tr);

}


