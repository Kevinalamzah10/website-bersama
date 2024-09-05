// Toggle & Responsive Navigation
const navSlide = () =>{
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")
}

// Clear form before uunload
window.onbeforeunload = () =>{
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}
