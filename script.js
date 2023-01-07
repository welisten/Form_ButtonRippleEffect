const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        submBtn = form.querySelector(".submit"),
        allInput = form.querySelectorAll(".first input");
        



nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'))

// ------------------- Button Ripple Effect ---------------------------------

let button
let coordenadas


nextBtn.addEventListener("mouseover", (e) => {
    e.preventDefault()
    
    button = nextBtn
    coordenadas = button.getBoundingClientRect();

    const x = (e.pageX - coordenadas.x)
    const y = (e.pageY - coordenadas.y)

    nextBtn.style.setProperty("--xPos", x + "px")
    nextBtn.style.setProperty("--yPos", y + "px")

})

backBtn.addEventListener("mouseover", (e) => {
    e.preventDefault()
    
    button = backBtn
    coordenadas = button.getBoundingClientRect();

    const x = (e.pageX - coordenadas.x)
    const y = (e.pageY - coordenadas.y)

    backBtn.style.setProperty("--xPos", x + "px")
    backBtn.style.setProperty("--yPos", y + "px")

})

submBtn.addEventListener("mouseover", (e) => {
    e.preventDefault()
    
    button = submBtn
    coordenadas = button.getBoundingClientRect();

    const x = (e.pageX - coordenadas.x)
    const y = (e.pageY - coordenadas.y)

    submBtn.style.setProperty("--xPos", x + "px")
    submBtn.style.setProperty("--yPos", y + "px")

})
