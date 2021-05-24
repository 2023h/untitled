namespace SpriteKind {
    export const princess = SpriteKind.create()
}
function garlicfarm () {
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile10`)
    controller.player1.moveSprite(mySprite, 100, 100)
    mySprite.ay = 0
    garlic_princess = sprites.create(img`
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . f 3 e e e f b f b b b b f . . 
        . . f e 4 4 f 1 e b b b b f . . 
        . . . f 4 4 4 4 f b b b b f f . 
        . . . f e e e f f f b b b b f . 
        . . . f d d d e 4 4 f b b f . . 
        . . . f d d d e 4 4 e f f . . . 
        . . f b d b d b e e b f . . . . 
        . . f f 1 d 1 d 1 d f f . . . . 
        . . . . f f b b f f . . . . . . 
        `, SpriteKind.princess)
    garlic_count = 0
    tiles.placeOnRandomTile(garlic_princess, assets.tile`myTile11`)
    for (let index = 0; index < 40; index++) {
        garlic = sprites.create(img`
            . . . . . . . . . . f f f f f . 
            . . . . . . . . . f d d e d d f 
            . . . . . . f f f d d d e d d f 
            . . . . . f d d d d e e d d d e 
            . . . . f d d d d e e d d d d f 
            . . . f d d d d e e d d d d d f 
            . . . f d d d e e d d d d e e f 
            . . f d d d e e d d d d d e d f 
            . f f d d e e d d e d d d d d f 
            f d d d e e d d d d d d d d d f 
            f d e e d d d d d d d d d d d f 
            f e d d d d d d d d d d d d f . 
            f d d d d d d d e e d d d f . . 
            f d d d d d d e d d d d f . . . 
            . f f f d e e d d d d f . . . . 
            . . . . f f f f f f f . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(garlic, sprites.castle.tileGrass1)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (jump < 1) {
            mySprite.vy = -100
            jump += 1
        }
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.princess, function (sprite, otherSprite) {
    game.showLongText("Hi! I am the garlic princess. The vampire apocalypse is destroying the world. To stop the vampires you must make spears out of garlic. Bring me 30 garlics and I will forge you a garlic spear.", DialogLayout.Full)
    garlic_princess.destroy()
})
function vampire () {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile10`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    garlicfarm()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    garlic_count += 1
    if (30 < garlic_count) {
        game.splash("go speak to the garlic princess")
        garlic.destroy()
        tiles.placeOnRandomTile(garlic_princess, assets.tile`myTile13`)
    }
})
let jump = 0
let garlic: Sprite = null
let garlic_count = 0
let garlic_princess: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccdddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccdddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccdddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccdddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccdddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccdddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccccccccccccccc
    cccccccccdddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccc
    cccccccccdddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccc
    ccccccccdddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffcccccccfffffffffffffffffcccccccccccccccccccccccccc
    cccccccdddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffcccccccccccccccccccccccccc
    ccccccdddddddddddddddddddddddddddfffffffffffdccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
    ccccccdddddddddddddddddddddddfffffffffffffffffccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
    cccccdddddddddddddddddddddddfffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
    cccccddddddddddddddddddddddffffffffffffffffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
    cccccdddddddddddddddddddddfffffffffffffffffffffffffffffffffccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccc
    ccccddddddddddddddddddddddfffffffffffffffffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccc
    ccccdddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccc
    ccccdddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccc
    ccccddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccc
    ccccddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccc
    ccccddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccc
    ccccddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccc
    ccccdddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccc
    ccccdddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccc
    ccccddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccc
    ccccddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccc
    ccccdddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccc
    ccccdddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccc
    cccccdddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccc
    cccccdddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccc
    cccccddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccc
    ccccccdddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccc
    ccccccdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccc
    cccccccddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccc
    ccccccccdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccc
    cccccccccddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccc
    cccccccccddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccc
    ccccccccccdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
    ccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccc
    cccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccc
    ccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccc
    cccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccc
    cccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccc
    cccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccc
    ccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccc
    ccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccc
    ccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccc
    ccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccc
    ccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
    ccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffcccccc
    cccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffccccc
    cccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffcccccccffffffffffffffffffffffffffffffffffffffffffffffccccc
    ccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffffffffffffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffcccc
    cccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffcccc
    cccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffcccc
    ccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffffffffffccccccccccffffffffffffffffffffffffffffffffffffffffffffcccc
    cccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffffffffffccccccccccffffffffffffffffffffffffffffffffffffffffffffcccc
    cccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffcccc
    ccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffcccc
    cccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccffffffffffffffffffcccccccccffffffffffffffffffffffffffffffffffffffffffffffccc
    cccccccccccccccccffffffffffffffffffffffffffffffffffffcccccccccffffffffffffffccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffcc
    ccccccccccccccccccccfffffffffffffffffffffffffffffffffcccccccccccffffffccccccccccccccffffffffffffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffc
    ccccccccccccccccccccfffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccfffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccfffffffffffffffffffffffffffffffffccccccccccccfccccccccccccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccffffffffffffffffffffffffffffffccccccccccccfccccccccccccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffcccccccccc
    cccccccccccccccccccccccccccccccccffffffffffffffffffffcccccccccffffcffcccccccccccccccffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffcccccccccc
    cccccccccccccccccccccccccccccccccffffffffffffffffffffcccccccccfffffffccccccccccccccfffffffffffffffffffccccccccccffffffffffffffffffffffffffffffffffffffcccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccfffffffffcccccccccccccffffffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffcccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccfffffffffcccccccccccccffffffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffcccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccfffffffffcccccccccccccffffffffffffffffffcccccccccccccffffffffffffffffffffffffffffffffffffcccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccffffffffccccccccccccccffffffffffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffcccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccfcccccccccccccccccffffffffffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffcccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccfcccccccccccccccccffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffccccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccccffffffffffffffffffffffffffffffccccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffccccccccccccccccccccccccccccccffffffffffffffffffcccccccccccccccccccfffffffffffffffffffffffffffffccccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffccccccccccccccccccccffffffffffffffffffffffffffffccccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffccccccccccccccccccccccccccccccffffffffffffffffffccccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffcccccccccccccccccccccccccccccccfffffffffffffffffccccccccccc
    ccccccccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffccccccccccccccccccccccccccccccccffffffffffffffffccccccccccc
    cccccccccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffcccccccccccccccccccccccccccccccccfffffffffffffffccccccccccc
    cccccccccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffccccccccccccccccccccccccccccccccccffffffffffffffccccccccccc
    cccccccccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffccccccccccccccccccccccccccccccccccccfffffffffffcccccccccccc
    cccccccccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccfffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    cccccccccccccccccccccccccccccccffffffffffffffffffffffccccccccccccccccccccccccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    cccccccccccccccccccccccccccccccffffffffffffffffffffffccccccccccccccccccccccccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    cccccccccccccccccccccccccccccccffffffffffffffffffffffccccccccccccccccccccccccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    cccccccccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    cccccccccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    ccccccccccccccccccccccccccccccfffffffffffffffffffffffcccccccccccccccccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    ccccccccccccccccccccccccccccccfffffffffffffffffffffffccccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    ccccccccccccccccccccccccccccccffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    cccccccccccccccccccccccccccccfffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffffffffffcccccccccccc
    ccccccccccccccccccccccccccccffffffffffffffffffffffffffcccccccccccccccccccccccccfffffffffffffffffffffffccccccccccccccccccccccccccccccccccccfffffffffffccccccccccc
    cccccccccccccccccccccccccccfffffffffffffffffffffffffffcccccccccccccccccccccccccfffffffffffffffffffffffccccccccccccccccccccccccccccccccccccfffffffffffccccccccccc
    cccccccccccccccccccccccccccfffffffffffffffffffffffffffcccccccccccccccccccccccccfffffffffffffffffffffffccccccccccccccccccccccccccccccccccccfffffffffffccccccccccc
    ccccccccccccccccccccccccccffffffffffffffffffffffffffffcccccccccccccccccccccccccfffffffffffffffffffffffcccccccccccccccccccccccccccccccccccfffffffffffffcccccccccc
    cccccccccccccccccccccccccfffffffffffffffffffffffffffffcccccccccccccccccccccccccfffffffffffffffffffffffcccccccccccccccccccccccccccccccccccfffffffffffffcccccccccc
    ccccccccccccccccccccccccffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffffccccccccccccccccccccccccccccccccccffffffffffffffccccccccc
    cccccccccccccccccccccccfffffffffffffffffffffffffffffffcccccccccccccccccccccccccffffffffffffffffffffffffccccccccccccccccccccccccccccccccccffffffffffffffccccccccc
    ccccccccccccccccccccccfffffffffffffffffffffffffffffffffccccccccccccccccccccccccffffffffffffffffffffffffcccccccccccccccccccccccccccccccccfffffffffffffffccccccccc
    ccccccccccccccccccccccfffffffffffffffffffffffffffffffffccccccccccccccccccccccccfffffffffffffffffffffffffccccccccccccccccccccccccccccccccfffffffffffffffccccccccc
    cccccccccccccccccccccfffffffffffffffffffffffffffffffffffccccccccccccccccccccccfffffffffffffffffffffffffffccccccccccccccccccccccccccccccfffffffffffffffffcccccccc
    ccccccccccccccccccccffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffffffffffffffffffffffffffffcccccccccccccccccccccccccccccffffffffffffffffffcccccccc
    ccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccccccccccccccfffffffffffffffffffffffffffffccccccccccccccccccccccccccccfffffffffffffffffffccccccc
    cccccccccccccccccccffffffffffffffffffffffffffffffffffffffcccccccccccccccccccfffffffffffffffffffffffffffffffccccccccccccccccccccccccccffffffffffffffffffffccccccc
    ccccccccccccccccccfffffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffccccccccccccccccccccccccfffffffffffffffffffffccccccc
    cccccccccccccccccfffffffffffffffffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccccccccccccccccffffffffffffffffffffffcccccc
    ccccccccccccccccffffffffffffffffffffffffffffffffffffffffffcccccccccccccffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffffffccccc
    cccccccccccccccffffffffffffffffffffffffffffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffccccccccccccccffffffffffffffffffffffffffffccccc
    ccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccc
    ccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    ccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    `)
game.showLongText("vampire hunter", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f f . 
    f f e 4 e 1 f 4 4 f f . . 
    . f f f e 4 4 4 4 f . . . 
    . 4 4 4 e e e e f f . . . 
    . e 4 4 e 7 7 7 7 f . . . 
    . f e e f 6 6 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `, SpriteKind.Player)
vampire()
scene.cameraFollowSprite(mySprite)
controller.player1.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
