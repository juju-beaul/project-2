let Game_Started_1 = false
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.pause(100)
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    game.addScore(1)
    basic.pause(100)
    basic.showNumber(game.score())
})
basic.forever(function () {
    Game_Started_1 = false
    basic.pause(randint(1000, 5000))
    Game_Started_1 = true
    basic.showIcon(IconNames.Heart)
    while (Game_Started_1) {
        let start = 0
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            Game_Started_1 = false
            elapsed = input.runningTime() - start
            basic.showNumber(Math.idiv(elapsed, 1000))
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("B")
            Game_Started_1 = false
            elapsed = input.runningTime() - start
            basic.showNumber(Math.idiv(elapsed, 1000))
        }
    }
    basic.pause(3000)
    basic.clearScreen()
})
