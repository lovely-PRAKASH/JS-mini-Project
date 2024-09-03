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
// converting 12 hr format
    if (hr > 12) {
        hr = hr - 12
        ampm.innerHTML = "PM"
    }
}
// adding zero for single numbers like 1 to 9 =>01,02
function padZero(num) {
    return num < 10 ? "0" + num : num
}
setInterval(displaytime, 500)
