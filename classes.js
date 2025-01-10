const classes = [
    {
        name: "Hatha Yoga",
        image: "../images/hatha.jpg",
        description: "Estilo tradicional de yoga que se centra en mantener la postura mientras se realizan ejercicios de respiración. Ideal para principiantes porque se aprenden los fundamentos del yoga y la conciencia del cuerpo y la respiración.",
        schedule1: "Lunes y miércoles de 9 a 10 horas.",
        schedule2: "Martes y jueves de 17 a 18 horas.",
        schedule3: "Miércoles y viernes de 20 a 21 horas.",
        price: "$25.000/mes"
    },
    {
        name: "Flow Yoga/Power Yoga",
        image: "../images/flow.jpg",
        description: "Estilo dinámico que combina la respiración con movimientos rápidos y constantes de una postura a otra.",
        schedule1: "Lunes y miércoles de 10 a 11 horas.",
        schedule2: "Martes y jueves de 18 a 19 horas.",
        schedule3: "Miércoles y viernes de 19 a 20 horas.",
        price: "$25.000/mes"
    },
    {
        name: "Yoga restaurativo",
        image: "../images/restaurativo.jpg",
        description: "Forma suave de yoga que utiliza accesorios para promover un estado de relajación física y mental.",
        schedule1: "Lunes y jueves de 9 a 10 horas.",
        schedule2: "Martes y viernes de 17 a 18 horas.",
        schedule3: "Miércoles y sábado de 10 a 11 horas.",
        price: "$25.000/mes"
    },
    {
        name: "Bikram Yoga",
        image: "../images/bikram.jpg",
        description: "Todas las clases de yoga Bikram tienen una duración de 90 minutos y consisten en la misma serie de 26 posturas, incluyendo dos ejercicios de respiración. Se practica en una habitación calentada a 40.6 °C con una humedad del 40%.",
        schedule1: "Martes y jueves de 8 a 9 horas.",
        schedule2: "Martes y jueves de 19 a 20 horas.",
        schedule3: "Miércoles y sábado de 9 a 10 horas.",
        price: "$25.000/mes"
    },
    {
        name: "Yin Yoga",
        image: "../images/yin.jpg",
        description: "Es un estilo pasivo del Hatha Yoga, compuesto por posturas que se mantienen de 3 a 5 min. Trabaja los niveles más profundos del cuerpo/corazón/mente: el tejido conectivo de los ligamentos, articulaciones y huesos y los canales energéticos de los meridianos, nervios y sistema sanguíneo.",
        schedule1: "Martes y jueves de 11 a 12 horas.",
        schedule2: "Miércoles y viernes de 16 a 17 horas.",
        schedule3: "Miércoles y sábado de 8 a 9 horas.",
        price: "$25.000/mes"
    },
    {
        name: "Sivananda Yoga",
        image: "../images/yin2.jpg",
        description: "Se basa en cinco principios fundamentales: posturas, respiración, relajación, alimentación adecuada y pensamiento positivo/meditación. Además de las posturas físicas y la respiración, se hace hincapié en la relajación y la meditación como elementos esenciales para el equilibrio y la salud general. Este estilo sigue una estructura específica de 12 posturas básicas y secuencias predefinidas.",
        schedule1: "Lunes y jueves de 8 a 9 horas.",
        schedule2: "Miércoles y sábado de 14 a 15 horas.",
        schedule3: "Martes y sábado de 10 a 11 horas.",
        price: "$25.000/mes"
    },
]

let classCard = document.querySelector(".class-card")

for(const item of classes){
    classCard.innerHTML +=`
    <div class="classCards">
        <img class="class-img" src="${item.image}">
        <h2 class="class-title">${item.name}</h2>
        <p class="class-desc">${item.description}</p>
        <div>
            <h3>Horarios</h3>
            <p class="class-schedule">${item.schedule1}</p>
            <p class="class-schedule">${item.schedule2}</p>
            <p class="class-schedule">${item.schedule3}</p>
        </div>
        <h4 class="class-price">Valor: ${item.price}</h4>
        <a class="info-button" href="https://wa.me/5493487676898" target="_blank">Consultar</a>
    </div>
    `
}