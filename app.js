const button = document.querySelectorAll(".btn")
const output = document.querySelector('.output__container')

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e)=>{
    console.log(value)
    const value = button[i].innerHTML
    const currentValue = output.innerHTML
    output.innerHTML = currentValue + value
  })
  
}
