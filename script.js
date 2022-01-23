function compute() {
    const principalElement = document.getElementById("principal");
    if (isValidPrincipal()) {
        const principal = principalElement.value;
        const rate = document.getElementById("rate").value;
        const years = document.getElementById("years").value;
        const interest = principal * years * rate / 100;
        const year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>at an interest rate of <mark>${rate}%</mark>.<br>You will receive an amount of <mark>${interest}</mark>,<br>in the year <mark>${year}</mark>`;
    } else {
        alert("Enter a positive number");
        principalElement.focus();
    }
}

function updateRate() {
    document.getElementById("rate_val").innerText = `${document.getElementById("rate").value}%`;
}

function isValidPrincipal() {
    var principal = document.getElementById("principal").value;
    return principal > 0;
}
        