// // console.log('button clicking file added')
// // step1
// document.getElementById('button-login')  
// .addEventListener('click', function(event){
//     // step2
//     event.preventDefault();
    
//     // step3
// const phoneNumber = document.getElementById('Phone-number').value;
// const pinNumber = document.getElementById('pin-number').value;
// console.log(phoneNumber , pinNumber)
// // step4
// if(phoneNumber=== '5'&& pinNumber==='1234'){
//     console.log('you are logged in')
// }
// // step5
// else{
//     alert('worning phone number or pin');
// }
// })


document.getElementById('button-login').addEventListener('click', function(event){
    // console.log('button clicked')


 event.preventDefault();
const phoneNumber = document.getElementById('Phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
// console.log(phoneNumber , pinNumber);
if(phoneNumber === '8' && pinNumber === '12345'){
   console.log('you are login in')
   window.location.href ='/home.html';
    
} 
else{
   alert('worning phone number ot pin')
}

})
 