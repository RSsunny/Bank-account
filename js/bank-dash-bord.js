document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositFild=document.getElementById('diposit-fild')
    const depositString=depositFild.value
    const deposit=parseFloat(depositString)
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
    depositFild.value=''
    
})
// ----------------------
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawFlid=document.getElementById('withdraw-fild')
    const withdrawValue=parseFloat(withdrawFlid.value)
    const preWithdraw=document.getElementById('pre-withdraw')
    const preWithdrawValu=parseFloat(preWithdraw.innerText)
    const totalWithdraw=preWithdrawValu+withdrawValue;
    preWithdraw.innerText=totalWithdraw
    const prelBlance=document.getElementById('totao-Blanche')
    const pretotalBlance=parseFloat(prelBlance.innerText)
    const totalMainBlance=pretotalBlance -withdrawValue
    prelBlance.innerText=totalMainBlance
    withdrawFlid.value=''
})