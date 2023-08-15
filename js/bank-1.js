document.getElementById('log-btn').addEventListener('click',function(){
    const eamilFild=document.getElementById('email-fild')
    const email=eamilFild.value
    const passwoedlFild=document.getElementById('password-fild')
    const password=passwoedlFild.value
    if(email==='sunnysharif154@gmail.com' && password==='Nevergiveup123@123'){
        window.location.href = "bank-das-boord.html"
    }
    else{
        alert('invalid');
    }
   
})