// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010808080808080808080808080808070209090609080808080209060b090906020a0906090a09090609090609090906020909060909090906090906090a090602090b06090b0909060b090908090906020909060b09050506090a090b06090602090a0609060a090909090a090a0806020909060a06090b090a09090904090602090a060909090909090909040a09060209090b08080808080a09060909090602090b090909060909090906090a0906020505050a09060a090b0a060909090602090a02090906090909090908080806020909020909060b090a090a090a090602090b090a09090909090b090909090603050505050505050505050505050504`, img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . 2 2 2 2 2 . 2 . . . 2 
2 . . 2 . . . . 2 . . 2 . . . 2 
2 . . 2 . . . . 2 . . 2 . . . 2 
2 . . 2 . . . . 2 . . . 2 . . 2 
2 . . 2 . . 2 2 2 . . . . 2 . 2 
2 . . 2 . 2 . . . . . . . . 2 2 
2 . . 2 . 2 . . . . . . . 2 . 2 
2 . . 2 . . . . . . . . 2 . . 2 
2 . . . 2 2 2 2 2 . . 2 . . . 2 
2 . . . . . 2 . . . . 2 . . . 2 
2 2 2 2 . . 2 . . . . 2 . . . 2 
2 . . 2 . . 2 . . . . . 2 2 2 2 
2 . . 2 . . 2 . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
