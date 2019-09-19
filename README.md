## You Can Change file multiple and single
  #dir /public/main.js
     //#for single file
    ////////////////////////
    // let file = document.querySelector('#file').files[0];

    //form data add
    //FORM ထဲကို file data ထည့်
    // data.append('file',file);
    ////////////////////

      //#for multiple file
    ///////////////////////////
    let files = document.querySelector('#file').files;
    //if file not choose
    if(files.length == 0){
      return window.alert('Please choose files ');
    }
    //is file array
    for(let file of files){
      //form data add
      //FORM ထဲကို file data ထည့်
      data.append('file',file);
    }
    /////////////////////////

  #dir ./app.js
    //#for single file
    //const upload = multer({storage}).single('file');

    //multiple file
    //const upload = multer({storage}).array('file');