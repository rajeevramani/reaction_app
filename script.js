var intervalId; // Global variable to store the interval ID

function validateInputs() {
    var maxNumber = parseInt(document.getElementById('maxNumber').value);
    var intervalInSeconds = parseInt(document.getElementById('interval').value);
    var repeat = parseInt(document.getElementById('repeat').value);

    if (isNaN(maxNumber) || isNaN(intervalInSeconds) || isNaN(repeat) ||
        maxNumber <= 0 || intervalInSeconds <= 0 || repeat <= 0) {
        alert('Please enter valid numbers greater than 0.');
        return false;
    }

    return true;
}

function generateRandomNumbers() {
    if (!validateInputs()) {
        return;
    }

    var maxNumber = parseInt(document.getElementById('maxNumber').value);
    var intervalInSeconds = parseInt(document.getElementById('interval').value);
    var interval = intervalInSeconds * 1000; // Convert interval to milliseconds
    var repeat = parseInt(document.getElementById('repeat').value);
    var output = document.getElementById('output');

    output.innerHTML = '';

    var messages = ["Get ready", "5", "4", "3", "2", "1", "Start"];
    var messageIndex = 0;
    var messageIntervalId = setInterval(function () {
        if (messageIndex >= messages.length) {
            clearInterval(messageIntervalId);

            var i = 0;
            var intervalId = setInterval(function () {
                if (i >= repeat) {
                    clearInterval(intervalId);
                    return;
                }

                var randomNumber = Math.floor(Math.random() * maxNumber) + 1;
                output.innerHTML = randomNumber;
                i++;

                // Scroll to the output element
                output.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, interval);
        } else {
            output.innerHTML = messages[messageIndex];
            messageIndex++;
        }
    }, 1000);
}




function stopGenerating() {
    clearInterval(intervalId);
}

function resetFields() {
    document.getElementById('maxNumber').value = '';
    document.getElementById('interval').value = '1';
    document.getElementById('repeat').value = '';
    document.getElementById('output').innerHTML = '';
}
