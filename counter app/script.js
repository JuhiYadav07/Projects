const countValue = document.querySelector('#counter');

const increment =()=>{
    //getting the value;
    let value = parseInt(countValue.innerText);
    value++;
    //updating the content
    countValue.textContent = value;
}


const decrement =()=>{
    //getting the value;
    let value= parseInt(countValue.innerText);
    value--;
    //updating the content
    countValue.innerText=value;
}