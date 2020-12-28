var WindBullet = require("WindBullet")

var BronzeBullet = WindBullet;

BronzeBullet.speed = 6.0
BronzeBullet.lifetime = 33
BronzeBullet.damage = 10
BronzeBullet.reloadMultiplier = 0.1
BronzeBullet.width = 7
BronzeBullet.height = 9
BronzeBullet.shootEffect = Fx.shootSmall
BronzeBullet.smokeEffect = Fx.shootSmallSmoke

BronzeBullet.ammoMultiplier = 1
BronzeBullet.backColor = Color.valueOf("af8A69")
BronzeBullet.frontColor = Color.valueOf("ffdab9")


var CopperBullet = WindBullet;

CopperBullet.speed = 10.0
CopperBullet.lifetime = 20
CopperBullet.damage = 1
CopperBullet.reloadMultiplier = 1.0
CopperBullet.width = 5
CopperBullet.height = 9
CopperBullet.shootEffect = Fx.shootSmall
CopperBullet.smokeEffect = Fx.shootSmallSmoke

CopperBullet.ammoMultiplier = 2
CopperBullet.backColor = Color.valueOf("ffd900")
CopperBullet.frontColor = Color.valueOf("ffd900")


var Storm = extendContent(ItemTurret, "storm", {})
Storm.ammo(
  global.bronze, BronzeBullet,
  Items.copper, CopperBullet
);