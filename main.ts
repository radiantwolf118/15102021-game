tiles.setTilemap(tilemap`level1`)
let polarBear = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c c . . . . . c c c . . 
    . . . c f c c c c c c c f c . . 
    . . . c c c c c c c c c c c . . 
    . . . . c c c c c c c c c . . . 
    . . . . c c 6 c c c 6 c c . . . 
    . . . . c c c c c c c c c . . . 
    . . . . c 3 c c c c c 3 c . . . 
    . . . . c c c c b c c c c . . . 
    . . . . c c c 6 c 6 c c c . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
polarBear.setPosition(20, 10)
controller.moveSprite(polarBear, 100, 100)
scene.cameraFollowSprite(polarBear)
