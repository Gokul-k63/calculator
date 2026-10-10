let output = document.getElementById("off");

document.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        calculate();
    }
});

function display(num) {
    output.value += num;
}

function calculate() {
    try {
        output.value = eval(output.value);
    }
    catch (err) {
        alert("invalid input")
    }
}

function cl() {
    output.value = " ";
}

function del() {
    output.value = output.value.slice(0, -1);
}