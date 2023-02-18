
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

