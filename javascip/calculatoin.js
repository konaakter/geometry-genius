let serial = 1;
document.getElementById('btn-triangle').addEventListener('click', function(){
    /*---------------------triangle value-------------*/
    const  trianglenumber = elemetsvalue('triangle-fild-b');
    const triangleHnumber = elemetsvalue('triangle-fild-h');
    const TriangleNam = document.getElementById('Triangle-nam').innerText;
    /*-----triangle calculate----------*/
    const triangleAreaa = (0.5 * trianglenumber * triangleHnumber).toFixed(2);
    /*----------------------triangle calculatoin show----------------------*/
    tabletotalcostdisplay(TriangleNam, triangleAreaa);
    serial = serial + 1;
 
})




/*----------------------------rectangle-----------------------*/
document.getElementById('btn-rectangle').addEventListener('click', function(){
    /*---------------------rectangle value-------------*/
    const  rectangleWValue = elemetsvalue('rectangle-w');
    const rectangleLValue = elemetsvalue('rectangle-l');
    const RectangleNam = document.getElementById('Rectangle-nam').innerText;
    /*---------------------rectangle calculatoin-------------*/
    const rectangleArea = (rectangleWValue * rectangleLValue).toFixed(2);
    /*---------------------rectangle calculatoin show-------------*/
    tabletotalcostdisplay(RectangleNam, rectangleArea);
    serial = serial + 1;
})





/*********************************Parallelogram*************************************** */
document.getElementById('Parallelogram-btn').addEventListener('click', function(){
    const  ParallelogramBaseValue = elemetsvalue('Parallelogram-base');
    const ParallelogramHeightValue = elemetsvalue('Parallelogram-height');
    const parallelogramname = document.getElementById('parallelogram-nam').innerText;
    const ParallelogramArea = (ParallelogramBaseValue * ParallelogramHeightValue).toFixed(2);
    
    tabletotalcostdisplay(parallelogramname, ParallelogramArea);
    serial = serial + 1;

  /*  const container =  document.getElementById("table-containe");
    const tr = document.createElement("tr");
    tr.innerHTML = `
       <td>${1}</d>
       <td>${parallelogramname}</td>  
       <td>${ParallelogramArea} <sup>2</sup> cm</td>
       <td><button class="btn btn-info ">Covert</button></td>
    
    `;
    container.appendChild(tr);*/

});
/*--------------------------------------------rhomboscard------------------------------------*/

document.getElementById('Rhombus-btn').addEventListener('click', function(){
    const RhombusD1Value = elemetsvalue('Rhombus-d1');
    const RhombusD2Value = elemetsvalue('Rhombus-d2');
    const RhombusName = document.getElementById('Rhombus-nam').innerText;
    const RhombusArea = (0.5 * RhombusD1Value * RhombusD2Value).toFixed(2);
    tabletotalcostdisplay(RhombusName, RhombusArea);
    serial = serial + 1;


})
/******************************************pentagomgcard**************************** */
document.getElementById('Pentagon-btn').addEventListener('click', function(){
    const PentagonVValue = elemetsvalue('Pentagon-v');
    const PentagonPValue = elemetsvalue('Pentagon-p');
    const PentagonName = document.getElementById('Pentagon-nam').innerText;
    const PentagonArea = (0.5 * PentagonVValue * PentagonPValue).toFixed(2);
    tabletotalcostdisplay(PentagonName, PentagonArea);
    serial = serial + 1;

})
/**********************************elliosecard********************************* */

document.getElementById('Ellipse-btn').addEventListener('click', function(){
    const EllipseAValue = elemetsvalue('Ellipse-a');
    const EllipseBValue = elemetsvalue('Ellipse-b');
    const EllipseName = document.getElementById('Ellipse-nam').innerText;
    const pie = 3.1416
    const EllipseArea = (pie * EllipseAValue * EllipseBValue).toFixed(2);
    tabletotalcostdisplay(EllipseName, EllipseArea);
    serial = serial + 1;

})


/********************************to go another html pase***************************** */
document.getElementById('naver-bolg-btn').addEventListener('click', function(){
    window.location.href = 'mcq.html';
})


const myElement = document.getElementById('my-element');
const colors = ['red', 'blue', 'green', 'purple', 'orange']; 
let colorIndex = 0; 

myElement.addEventListener('mouseenter', function() {

  myElement.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

const mycecoelement = document.getElementById('my-ceco-element');
const colors2 = ['aqua', 'brown', 'orange', 'yellow', 'blue']; 
let colorIndex2 = 0; 
myElement.addEventListener('mouseenter', function() {

    mycecoelement.style.backgroundColor = colors2[colorIndex2];
  colorIndex2 = (colorIndex2 + 1) % colors2.length;
});