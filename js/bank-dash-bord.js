document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositFild=document.getElementById('diposit-fild')
    const depositString=depositFild.value
    
    const deposit=parseFloat(depositString)
    depositFild.value=''
    if(isNaN(deposit) || deposit<=0 ||deposit>100000){
        alert('plese provide  number')
        return;
    }
    const prevesdipositValue=document.getElementById('deposit-value')
    const predepositBlanceString=prevesdipositValue.innerText
    const predepositBlance=parseFloat(predepositBlanceString)
    const curentDeposit=predepositBlance+deposit
    prevesdipositValue.innerText=curentDeposit;
    const prelBlance=document.getElementById('totao-Blanche')
    const pretotalBlanceString=prelBlance.innerText
    const pretotalBlance=parseFloat(pretotalBlanceString);
    const totalMainBlance=pretotalBlance + deposit
    prelBlance.innerText=totalMainBlance
    
    
})
// ----------------------
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawFlid=document.getElementById('withdraw-fild')
    const withdrawValue=parseFloat(withdrawFlid.value)
    withdrawFlid.value=''
    if(isNaN(withdrawValue) || withdrawValue<=0 || withdrawValue>25000){
        alert('please provide a positive number')
        return;
    }
    const preWithdraw=document.getElementById('pre-withdraw')
    const preWithdrawValu=parseFloat(preWithdraw.innerText)
    
    const prelBlance=document.getElementById('totao-Blanche')
    const pretotalBlance=parseFloat(prelBlance.innerText)
    
    if(pretotalBlance < withdrawValue){
        alert('tomar bank a ato taka nai')
        return;
    }
    const totalWithdraw=preWithdrawValu+withdrawValue;
    preWithdraw.innerText=totalWithdraw
    const totalMainBlance=pretotalBlance-withdrawValue
    prelBlance.innerText=totalMainBlance
    
})