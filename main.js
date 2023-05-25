
const swicherLis = document.querySelectorAll(".swicher li");
const images = document.querySelectorAll(".image img");
// const images = document.images;
// const images = Array.from(document.images);
console.log(images)

swicherLis.forEach(li =>{
    li.addEventListener("click", removeActive)
    li.addEventListener("click", mangeimg)
})

function removeActive(){
    swicherLis.forEach(li=>{
        li.classList.remove("active")
        this.classList.add("active")
    })
}

function mangeimg(){
    images.forEach(img =>{
        img.style.display = 'none'
    })
    document.querySelectorAll(this.dataset.work).forEach(ele=>{
        ele.style.display = 'block'
    })
}

