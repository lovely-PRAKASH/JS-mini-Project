ampm = document.getElementById("ampm")
// adding function to perform clock action
function displaytime() {
    let dateTime = new Date()
    var hr = dateTime.getHours()
    var min = padZero(dateTime.getMinutes())
    var sec = padZero(dateTime.getSeconds())

    // getting html elements using id's

    document.getElementById("hours").innerHTML = padZero(hr)
    document.getElementById("mins").innerHTML = min
    document.getElementById("sec").innerHTML = sec

    if (hr > 12) {
        hr = hr - 12
        ampm.innerHTML = "PM"
    }
}

function padZero(num) {
    return num < 10 ? "0" + num : num
}
setInterval(displaytime, 500)
