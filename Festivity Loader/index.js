const meter = document.getElementById("meter")

function TimeForChristmas() {
    let nowDate = new Date()
    let Christmas  = 25 - nowDate.getDate()
    meter.setAttribute("value", Christmas)
}

TimeForChristmas()


