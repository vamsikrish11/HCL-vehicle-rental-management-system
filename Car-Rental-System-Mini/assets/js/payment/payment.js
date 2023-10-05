const inputValue=document.getElementById("inputName");
const paragraphEle=document.getElementById("paraCal");

function calculate(){
    let valueInput=parseInt(inputValue.value);
    let caluculatedValue=valueInput*30;
    paragraphEle.textContent="You have to pay the amount of "+caluculatedValue+"/-";
    paragraphEle.style.color="#ffffff";
    paragraphEle.style.fontSize="30px";
}