"""
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
"""


radio.set_group(42)

def on_forever():
    if input.button_is_pressed(Button.AB):
        radio.send_string("Forward")
        basic.show_arrow(ArrowNames.NORTH)
    elif input.button_is_pressed(Button.A):
        radio.send_string("Left")
        basic.show_arrow(ArrowNames.WEST)
    elif input.button_is_pressed(Button.B):
        radio.send_string("Right")
        basic.show_arrow(ArrowNames.EAST)
    else:
        radio.send_string("Stop")
        basic.show_leds("""
            . # # # .
            # . . # #
            # . # . #
            # # . . #
            . # # # .
            """)


basic.forever(on_forever)
