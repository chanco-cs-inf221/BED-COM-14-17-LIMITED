    // form input fields validation
    const validation= () =>{
        // get element's values using their ids
        var name= document.getElementById("name").value;
        var email= document.getElementById("email").value;
        if( name=== ''|| email=== ''){
        alert("Please fill all fields...!!!!!!");
        return false;
        } 
        else{
        return true;
        }

        
    // function stores user to storage
const storeUser= (user) =>{
    // get localStorage
    var storage= window.localStorage.getItem('users');
    // check first if storage exist
    // else create new and call it `users`
    var users= [];
    if(storage=== undefined && storage === null) {
    users.push(user);
    window.localStorage.setItem('users', JSON.stringify(users));
    } else{
    // create an array where to store the added values
    // otherwise we do not want to replace the old values with
    //new ones.
    if(storage !== undefined && storage !== null) {
    if(storage.length!== 0) {
    users = JSON.parse(window.localStorage.getItem('users'));
    } 
    }
    // then add new user to the list
    users.push(user);
    // here we are storing the users to local storage
    window.localStorage.setItem('users', JSON.stringify(users));
    }
}

// sets all form fields to null
// make sure that the type of para fields is an Array
const nullify= (fieldIds) =>{
    // here write the logic to clear the fields...
    }

    // function creates a single li element and set the innerHtml property to
//user's details ie. <li>Isaac(imwakabira@ymail.com)</li>
const singleUserListElement= (details) =>{
// create li element which will hold the user's details(name and email)
let item= document.createElement('li'); 
// then set user details to innerHtml property
item.innerHTML= details;
// then finally return this li element ie <li>Isaac(imwakabira@ymail.com)</li>
// to be appended to the parent ul element when loaded to the document page
return item;
}

const loadAndListAllUsers= () =>{
    // here logic to load users from local storage...
    }

    // register a single user and load to page list items
const register= () =>{
    var name= document.getElementById("name").value; 
    var email= document.getElementById("email").value;
    if(validation()) {
    // define the javascript object to be stored in local storage
    const user= {
    name: name;
    email: email;
    }




    //other constant declarations here
    let itemsArray = []

    localStorage .setItem('items' , JSON.stringify(itemArry))
    const data = JSON .parse(localStorage .getItem('items'))

    // form event listener
    e.preventDefualt ()

    itemArry .push(input.value)
    localStorage .setItem('items' , JSON.stringify(itemArry))

button.addEventListener ('click' , function() {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.removeChild)
    }
})

let itemArry = localStorage .getItem('items') ? JSON.parse(localStorage .getItem('items'))


    // store the added user to local storage
    storeUser(user);
    // alert user that submission was a success
    alert("Submitted Successfully...");
    // then nullify all fields in the form using thier ids
    nullify(['name', 'email']);
    // load all users to page from local storage
    loadAndListAllUsers();
    }
}
