input.onButtonPressed(Button.A, function () {
    defender.move(1)
    defender.ifOnEdgeBounce()
})
input.onButtonPressed(Button.B, function () {
    missile = game.createSprite(defender.get(LedSpriteProperty.X), 4)
    missile.set(LedSpriteProperty.Blink, 1)
    basic.pause(missileDelay)
    missile.change(LedSpriteProperty.Direction, 270)
    for (let index = 0; index < 4; index++) {
        missile.move(1)
        basic.pause(missileDelay)
        missile.move(1)
        if (missile.isTouching(alien)) {
            basic.showIcon(IconNames.Butterfly)
        }
    }
    missile.set(LedSpriteProperty.Blink, 0)
    missile.delete()
})
let bomb: game.LedSprite = null
let missile: game.LedSprite = null
let missileDelay = 0
let defender: game.LedSprite = null
let alien: game.LedSprite = null
alien = game.createSprite(0, 0)
let alienDelay = 1000
let bombDelay = 500
defender = game.createSprite(0, 4)
missileDelay = 200
game.setScore(0)
basic.forever(function () {
    basic.pause(alienDelay)
    alien.move(1)
    alien.ifOnEdgeBounce()
    if (Math.randomBoolean()) {
        bomb = game.createSprite(alien.get(LedSpriteProperty.X), 1)
        alien.set(LedSpriteProperty.Blink, 1)
        for (let index = 0; index < 4; index++) {
            basic.pause(bombDelay)
            bomb.change(LedSpriteProperty.Y, 1)
        }
        if (bomb.isTouching(defender)) {
            basic.showIcon(IconNames.No)
        }
        bomb.delete()
        alien.set(LedSpriteProperty.Blink, 0)
    }
})
