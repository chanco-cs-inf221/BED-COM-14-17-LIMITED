
const validation = () => {
    var league = document.getElementById("league").value;
    var name = document.getElementById("name").value;
    var nickName = document.getElementById("nickName").value;
    var colour = document.getElementById("colour").value;


    if( league === '' || name === '' || nickName === '' || colour === ''){
        alert("Some fields blank!");
        return false;
    } else {
        return true;
    }
}

const nullify = (fields) => {
    if (fields.length !== 0) {
        fields.map(field => {
            document.getElementById(field).value = '';
        });
    }
}

const clearAll = () => {
    var storage = window.localStorage.getItem('users');
    if (storage !== undefined) {
        window.localStorage.setItem('users', []);
    }
}

const storeUser = (user) => {

    var storage = window.localStorage.getItem('users');
    var users = [];
    if (storage === undefined && storage === null) {
        users.push(user);
        window.localStorage.setItem('users', JSON.stringify(users));
    } else {
        if(storage !== undefined && storage !== null) {
            if(storage.length !== 0) {
                users = JSON.parse(window.localStorage.getItem('users'));
            }
        }
        
        users.push(user);
        window.localStorage.setItem('users', JSON.stringify(users));
    }
}

const register = () => {
    var league = document.getElementById("league").value;
    var name = document.getElementById("name").value;
    var nickName = document.getElementById("nickName").value;
    var colour = document.getElementById("colour").value;
   
    if (validation()) {
        const user = {
            league: league,
            name: name,
            nickName: nickName,
            colour: colour
        }

        storeUser(user);

        alert("Good to proceed!");

        nullify(['league', 'name' , 'nickName', 'colour']);

        loadAndListAllUsers();
    }
}

const singleUserListElement = (user) => {
    let item = document.createElement('li');
    item.innerHTML = user;
    item.addEventListener('click', function(){
        
    })
    
    return item;
}

const loadAndListAllUsers = () => {

    let ol = document.getElementById('list_of_users');

    var storage = window.localStorage.getItem('users');
    
    var users = [];
    if(storage !== undefined && storage !== null) {
        if(storage.length !== 0) {
            users = JSON.parse(storage);
        }
    }
    

    if(users !== null) {
        if (users.length !== 0) {
            users.map(user => {
                ol.appendChild(singleUserListElement(user.league + ' '+'...' + user.name + '...' + ' '+ ' '+'...'+ user. nickName +'...' + ' ' + '...'+ user. colour +'...'));
            });

        }

    }
}


