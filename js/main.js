// :::::::::::: ARCHIVO PARA EL MANEJO DE ANIMACIOENS PARA EL SITIO ::::::::::::::::

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".image-container img", {
    ...scrollRevealOption,
    origin: "right",
})

ScrollReveal().reveal(".f-section div h2", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".f-section div h1", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".cards-container .row .col", {
    ...scrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".events-container", {
    duration: 1000,
})

ScrollReveal().reveal(".conocenos-container h3", {
    ...scrollRevealOption,
    origin: "right",
})

ScrollReveal().reveal(".conocenos-container h3:nth-child(2)", {
    ...scrollRevealOption,
    origin: "left",
})

ScrollReveal().reveal(".conocenos-container div", {
    ...scrollRevealOption,
    origin: "bottom",
})

ScrollReveal().reveal(".col-md-4 .card", {
    ...scrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".container .box", {
    ...scrollRevealOption,
    interval: 200,
})