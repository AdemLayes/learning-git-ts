function myFun() {
  let para = document.getElementById('para');
  let paraValue = para.innerHTML
  if(paraValue == "this is lovely!") {
    para.innerHTML = "Changed"
  }else{
    para.innerHTML = "this is lovely!"
  }
}