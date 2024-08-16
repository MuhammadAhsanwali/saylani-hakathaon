import { auth, createUserWithEmailAndPassword,onAuthStateChanged } from "./fb.js";


// console.log(password)


let getsbtn = document.getElementById('sbtn')


let submit = ()=>{
    let password  = document.getElementById('password')
    let email  = document.getElementById('email')
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        window.location = '/welcome.html'
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
        // ..
      });
}
getsbtn && getsbtn.addEventListener('click', submit)



// let getuser= document.getElementById('username')
 let getname = document.getElementById('name')
let email  = document.getElementById('email')

let geee  = document.getElementById('eee')
      

onAuthStateChanged(auth, (user) => {

  if (user) {
    // getname.innerHTML = getuser.value
    getname.innerHTML = user.email.slice(0,user.email.indexOf('@'))
  geee.innerHTML= user.email

      // getname.innerHTML = getuser.value


    

    const uid = user.uid;
    console.log(uid)

    // ...
  } else {

    if(location.pathname == '/welcome.html' ){
       window.location = 'index.html'
    }
console.log('not logged in')
  }
});

