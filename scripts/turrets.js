import mindustry.world.blocks.*;
import mindustry.world.blocks.defense.*;
import mindustry.world.blocks.defense.turrets.*;
const healTurret=new HealTurret("Heal turret"){{
            requirements(Category.turret, ItemStack.with(Items.copper, 25, Items.graphite, 22));
            ammo(
            Items.coal, Bullets.basicFlame,
            Items.pyratite, Bullets.pyraFlame
            );
            recoil = 0f;
            reload = 5f;
            coolantMultiplier = 2f;
            range = 60f;
            shootCone = 50f;
            targetAir = false;
            ammoUseEffect = Fx.none;
            health = 400;
            shootSound = Sounds.flame;
            size=2;
        }};