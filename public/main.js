function progress(total,loaded){
  let all = Math.round((100 / total ) * loaded );
  let bar = document.querySelector('#bar');
  bar.style.width = `${all}%`;
  bar.innerText = `${all}%`;
}

document.querySelector('#form').addEventListener('submit',(e)=>{
  //form prevent defalt
  //form default not working anymore
  e.preventDefault();
  //form data
  //form data တစ်ခုတည်ဆောက်
  var data = new FormData();

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

  //config
  //file data config
  const config = {
    headers:{
      'Content-Type':'multipart/form-data'
    },
    onUploadProgress:({total,loaded}) =>{
     progress(total,loaded);
    }
  }
  //send server nodejs
  axios.post('/upload',data,config)
    //server response
    .then(({data})=>{
      let files = [];
      //loop throw set files
      for(file of data){
        files.unshift(file);
      }

      //loop throw files
      for(file of files){
        //show tabl
        document.querySelector('#show-table').innerHTML += `
          <tr>
            <td>${file.originalname}</td>
            <td>${file.filename}</td>
            <td>${file.size}</td>
            <td>${file.mimetype}</td>
            <td>${file.destination}</td>
          </tr>
        `;
      }
    })
})