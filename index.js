let para = document.getElementById('para');
para.addEventListener('mouseover',function run(){
   alert('Mouse inside')

});


// para.addEventListener('mouseout',function run(){
//     alert('Mouse now went outside')

// });


function toggleHide(){
     let btn = document.getElementById('btn');
     let para = document.getElementById('para');
     if(para.style.display !='none'){
     para.style.display='none';
     }
     else{
         para.style.display='none';
     }

}