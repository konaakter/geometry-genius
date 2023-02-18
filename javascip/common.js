function elemetsvalue(element){
    const elemetsfild = document.getElementById(element);
    const elementstring = elemetsfild.value;
    const elementsnumber = parseFloat(elementstring);
    elemetsfild.value = ' ';
    return elementsnumber;
}
/*-----------------------------elemts show functoin----------------------*/

/*function getCalulatoinShow(ID, value){
    const IDshow = document.getElementById(ID);
    IDshow.innerText = value;
}*/



/****************************new tbale create********************* */
function tabletotalcostdisplay(nam, areatotal){
    const container =  document.getElementById("table-containe");
    const tr = document.createElement("tr");
    tr.innerHTML = `
       <td>${serial}</d>
       <td>${nam}</td>  
       <td>${areatotal} <sup>2</sup> cm</td>
       <td><button class="btn btn-info ">Covert to m<sup>2</sup></button></td>
    
    `;
    container.appendChild(tr);

}