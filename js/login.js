document.getElementById('Submit-button').addEventListener('click',function(){
    const userEmailField = document.getElementById('user-email')
   const email = userEmailField.value;
   console.log(email);

  const userpasswordField = document.getElementById('user-password');
   const password = userpasswordField.value;
   console.log(password);
   if(email =="admin@gmail.com" && password == 123456){
    window.location.href = "../banking.html";
   }
   

   
    
})
