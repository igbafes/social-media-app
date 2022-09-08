 //let target all the ID's selector
let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');
// build a submit event listner for the form so that it can prevent the default behaviour of our app

 form.addEventListener('submit', (e) =>{
   e.preventDefault();
    //console.log("button clicked");


    formValidation();
 });

 // let make if else statement inside our formValidation function(this will help us prevent users from submitting blank input fields)
 let formValidation = () =>{
    if (input.value ===""){
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
    
 }

 //how to accept data from input fields, let create an object that we will store the input fields collected from users in a variable
  let data = {};//this is where i will store the data
  // we need the acceptData function to work when the user click the submit button
  let acceptData = () =>{
    data["text"] = input.value;
    console.log(data);
    createPost();
  }

  //how to create a posts using javascript template literals
  // in other to post our input data on the right side,we need 
  //to create a div element and append it to the posts div.
  // first,let create a function

  let createPost = () =>{
    // we need parent div,the input itself,and the options div which carries the edit and delete icons
    posts.innerHTML +=`
    <div>
     <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>

      </span>
    
    </div>
    `;
    
    input.value = "";
  }

//how to delete a post;let create function
 let deletePost = (e) =>{
    e.parentElement.parentElement.remove();
 }

 let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
 }