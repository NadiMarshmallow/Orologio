function printTime() {
    const now = new Date()
    const formattedDate = now.getHours() + ":" + "<span class='minuti'>" + now.getMinutes() + "</span>" + ':' + "<span class='secondi'>" + now.getSeconds() + "</span>"
    const orologioDiv = document.getElementById("orologio")
    orologio.innerHTML = formattedDate

    console.log(formattedDate)
}

setInterval(printTime, 1000)