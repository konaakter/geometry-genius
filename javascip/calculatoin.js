
document.getElementById('btn-triangle').addEventListener('click', function(){
    /*---------------------triangle value-------------*/
    const  trianglenumber = elemetsvalue('triangle-fild-b');
    const triangleHnumber = elemetsvalue('triangle-fild-h');
    /*-----triangle calculate----------*/
    const triangleAreaa = (0.5 * trianglenumber * triangleHnumber).toFixed(2);
    /*----------------------triangle calculatoin show----------------------*/
    getCalulatoinShow('area-total', triangleAreaa);
})




/*----------------------------rectangle-----------------------*/
document.getElementById('btn-rectangle').addEventListener('click', function(){
    /*---------------------rectangle value-------------*/
    const  rectangleWValue = elemetsvalue('rectangle-w');
    const rectangleLValue = elemetsvalue('rectangle-l');
    /*---------------------rectangle calculatoin-------------*/
    const rectangleArea = (rectangleWValue * rectangleLValue).toFixed(2);
    /*---------------------rectangle calculatoin show-------------*/
    getCalulatoinShow('triangle-total', rectangleArea);
})





/*********************************Parallelogram*************************************** */
document.getElementById('Parallelogram-btn').addEventListener('click', function(){
    const  ParallelogramBaseValue = elemetsvalue('Parallelogram-base');
    const ParallelogramHeightValue = elemetsvalue('Parallelogram-height');
    const parallelogramname = document.getElementById('parallelogram-nam').innerText;
    const ParallelogramArea = ParallelogramBaseValue * ParallelogramHeightValue;
    
    tabletotalcostdisplay(parallelogramname, ParallelogramArea);

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

document.getElementById('Rhombus-btn').addEventListener('click', function(){
    const RhombusD1Value = elemetsvalue('Rhombus-d1');
    const RhombusD2Value = elemetsvalue('Rhombus-d2');
    const RhombusName = document.getElementById('Rhombus-nam').innerText;
    const RhombusArea = (0.5 * RhombusD1Value * RhombusD2Value).toFixed(2);
    tabletotalcostdisplay(RhombusName, RhombusArea);


})
document.getElementById('Pentagon-btn').addEventListener('click', function(){
    const PentagonVValue = elemetsvalue('Pentagon-v');
    const PentagonPValue = elemetsvalue('Pentagon-p');
    const PentagonName = document.getElementById('Pentagon-nam').innerText;
    const PentagonArea = (0.5 * PentagonVValue * PentagonPValue).toFixed(2);
    tabletotalcostdisplay(PentagonName, PentagonArea);

})

document.getElementById('Ellipse-btn').addEventListener('click', function(){
    const EllipseAValue = elemetsvalue('Ellipse-a');
    const EllipseBValue = elemetsvalue('Ellipse-b');
    const EllipseName = document.getElementById('Ellipse-nam').innerText;
    const pie = 3.1416
    const EllipseArea = (pie * EllipseAValue * EllipseBValue).toFixed(2);
    tabletotalcostdisplay(EllipseName, EllipseArea);

})
