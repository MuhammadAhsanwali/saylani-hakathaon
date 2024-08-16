import { auth, signInWithEmailAndPassword,signOut } from "./fb.js";


let getInbtn = document.getElementById('inbtn')
let sub = ()=>{
    let email = document.getElementById('email')
    let password = document.getElementById('password')

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location= '/welcome.html'

      console.log(user)
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
}
getInbtn && getInbtn.addEventListener('click',sub)


let logout= document.getElementById('lbtn')

let glog=()=>{
  signOut(auth).then(() => {
  window.location ='/index.html'
  console.log('log out successfully')
  }).catch((error) => {
    console.log(error)
  });
}
logout && logout.addEventListener('click',glog)