function submitForm(event) {
    // prevent form from reloading
    event.preventDefault()

    const max = 10
    const randomNumber = Math.random() * max
    const randomRoundedNumber = Math.floor(randomNumber) + 1

    const userGuess = document.getElementById("userGuess").value

    if (userGuess == randomRoundedNumber) {
        alert("🎉 You won!")
    } else {
        alert(`😔 Sorry! Try again\n\nComputer Guess: ${randomRoundedNumber}\nYour guess: ${userGuess}`)
    }

    // Clear the input box after checking the guess
    document.getElementById("userGuess").value = ""
}