input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        number1 += 1
        basic.showNumber(number1)
    }
    if (_switch == 1) {
        number2 += 1
        basic.showNumber(number2)
    }
})
input.onButtonPressed(Button.AB, function () {
    op += 1
    if (op == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (op == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (op == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (op == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    op = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        if (op == 1) {
            basic.showNumber(number1 + number2)
        } else {
            if (op == 2) {
                basic.showNumber(number1 - number2)
            } else {
                if (op == 3) {
                    basic.showNumber(number1 * number2)
                } else {
                    basic.showNumber(number1 / number2)
                }
            }
        }
    }
})
let number2 = 0
let number1 = 0
let _switch = 0
let op = 0
op = 1
_switch = 0
number1 = 0
number2 = 0
basic.forever(function () {
	
})
