//   1. D O M selection 
//   2. add event listener 
//   3. premium validation
//   4. cration element 
//   5.  append child making 
        

//   start coding there happy  hacing
 


    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const year = document.querySelector('#year');
    const btn = document.querySelector('.btn');
    const booklist = document.querySelector('#book-list');



    // addition 

    function notify(){
        const alert = document.querySelector('.alert');
        btn.addEventListener('click',function(e){
            e.preventDefault();
            alert.style.display = 'inline';
        })
   }
 


    btn.addEventListener('click', function(e) {
        e.preventDefault();

        if(title.value == "" && author.value == "" && year.value == "") {
            notify();

        }else{
            const newRow = document.createElement('tr');
            // create new titlre
           const newTitle = document.createElement('th');
           newTitle.innerHTML = title.value;
           newRow.appendChild(newTitle);

            // create new titlre
            const newAuthor = document.createElement('th');
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);


                        // create new titlre
           const newYear = document.createElement('th');
           newYear.innerHTML = year.value;
           newRow.appendChild(newYear);


           booklist.appendChild(newRow);
        }

    });

//     dark and light mode
  const sun = document.querySelector('#sun');
  const icon = document.querySelector('.icon');
  sun.addEventListener('click',function(e){
      e.preventDefault();
      body.style.background = '#424242';
      body.style.color = 'white';
      title.style.background = 'none';
      author.style.background = 'none';
      year.style.background = 'none';
      title.style.color = 'white';
      author.style.color = 'white';
      year.style.color = 'white';
      title.style.fontFamily = 'arial black';
      author.style.fontFamily = 'Verdana';
      

      
  })

      
      const cloud = document.querySelector('#cloud');
   
  cloud.addEventListener('click', function(e){
      e.preventDefault();
      body.style.background = 'white';
      body.style.color = 'black';
      
    
      
  })

  
//     font changing javascript work is there 
    const fontchanging = document.querySelector('.font_changing');
    const textcenter   =  document.querySelector('.text-center');
    fontchanging.addEventListener('click',function (e) {
        e.preventDefault();
        
        
    })
//  cross bar  js
   const fatimes = document.querySelector('.fa-times');
   const alert   = document.querySelector('.alert');
   fatimes.addEventListener('click',function(e){
       e.preventDefault();
       alert.style.display = 'none';
       alert.style.transition = '0.6s';
   })