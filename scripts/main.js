function getbirthdate() {
    var input = document.getElementById("birthdate").value;
    var [day, month, year] = input.split('/').map(Number);
    var birthdate = new Date(year, month - 1, day);
    var result = calculatelivesworth(birthdate);
    document.getElementById("result").innerText = `You lived for: ${result}`;
}

function calculatelivesworth(birthdate) {
    var now = Date.now();
    var timeDifference = now - birthdate.getTime();
    var seconds = Math.floor(timeDifference / 1000);
    var minutes = Math.floor(timeDifference / (1000 * 60));
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return `${seconds} seconds, ${minutes} minutes, and ${days} days.`;
}