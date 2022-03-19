var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

// recognition i9s started

recognition.onstart = function () {
    instructions.text("Voice Recognition is on") //Changes Statement when START button is pressed
}

recognition.onspeechend = function () {
    instructions.text("No Activity") //Launched When There's no activity going on
}

recognition.onspeechend = function () {
    instructions.text("Try Again") //Error
}

recognition.onresult = function (event) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript //Enables Microphone to process Voice

    content += transcript

    textbox.val(content)
}


$("#start-btn").click(function(event){
    if (content.length){
        content += ''
    }

    recognition.start()
})
