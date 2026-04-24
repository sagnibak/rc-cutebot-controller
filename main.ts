/** 
Cutebot RC Car: Controller Code
-------------------------------

If A is pressed:
    send "Left" to the car
Elif B is pressed:
    send "Right" to the car
Elif AB is pressend:
    send "Forward" to the car
Else:
    send "Stop" to the car

 */
radio.setGroup(42)
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("Forward")
        basic.showArrow(ArrowNames.North)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("Left")
        basic.showArrow(ArrowNames.West)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("Right")
        basic.showArrow(ArrowNames.East)
    } else {
        radio.sendString("Stop")
        basic.showLeds(`
            . # # # .
            # . . # #
            # . # . #
            # # . . #
            . # # # .
            `)
    }
    
})
