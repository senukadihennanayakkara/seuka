input.onGesture(Gesture.LogoUp, function () {
    bitbot.stop(BBStopMode.Brake)
})
input.onButtonPressed(Button.AB, function () {
    bitbot.go(BBDirection.Forward, 60)
})
input.onGesture(Gesture.LogoDown, function () {
    bitbot.go(BBDirection.Reverse, 10)
})
