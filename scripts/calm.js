const Calm=extendContent(ItemTurret, "calm", {
	turnToTarget(tile, targetRot){
		entity=tile.ent();
		entity.rotation+=2;
	},
	bullet(tile, type, angle){
		Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx(), tile.drawy(), angle);
	}
});