namespace SpriteKind {
    export const princess = SpriteKind.create()
    export const princesss = SpriteKind.create()
    export const guard = SpriteKind.create()
}
function garlicfarm () {
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile10`)
    controller.player1.moveSprite(mySprite, 100, 100)
    garlic_count = 0
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
function battle () {
    mySprite.setImage(img`
        . . e . . . . . . . . . . 
        . e d f f f f f f . . . . 
        . d e f f f f f f f . . . 
        . d d f f f f c f f f . . 
        f e d f c f f f c f f f . 
        f d d f c c f f f c c f f 
        f d e f f f f e f f f f f 
        d d d d f f f e e f f f . 
        d d d d f b f e e f f f . 
        e d d d e 1 f 4 4 f f . . 
        . d d d e 4 4 4 4 f . . . 
        . d e 4 e e e e f f . . . 
        . d d 4 e 7 7 7 7 f . . . 
        . d d e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `)
    vampire2 = sprites.create(img`
        .f.......f....
        .ff.....ffb...
        fffcc.ccfbcb..
        fffcccccfbcc..
        .fc3cc3bcbccc.
        .cb3bc3bbcccc.
        ccbbbbbbbbcc..
        c11bbb11bbbfc.
        fbbbbbbbbbbfcc
        fbcbbbcbbbbf..
        .f1fff1bbbcf..
        ..fbbbbbbcf...
        ...fffffff....
        ...fcccccbf...
        ..ffbbbbfbbc..
        .ffccdddcbbf..
        ffccfdccffbc..
        ccbbfddccfbc..
        cbffbbbccfbf..
        bbfbbbbbcfbfc.
        .fcbbbbccbbbc.
        .fbbbbbcccbbf.
        ..bbbbbcccbbf.
        ..fcbbbccf....
        ..fcbfbbcf....
        ..fbbfbbcf....
        ..fccfbccf....
        ..fccfbcbf....
        ...ff..fff....
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(vampire2, assets.tile`myTile15`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile12`)
    tiles.setTilemap(tilemap`level5`)
    mySprite.ay = 200
    controller.player1.moveSprite(mySprite, 100, 0)
}
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
        game.splash("you have forged your garlic spear")
        battle()
    }
})
let vampire2: Sprite = null
let jump = 0
let garlic: Sprite = null
let garlic_count = 0
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
scene.cameraFollowSprite(mySprite)
controller.player1.moveSprite(mySprite, 100, 0)
vampire()
forever(function () {
    mySprite.ay = 200
})
