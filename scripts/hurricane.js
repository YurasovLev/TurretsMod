const hurricane = extendContent(ItemTurret, "hurricane", {
	turnToTarget(tile, targetRot){
		entity=tile.ent();
		entity.rotation+=1;
	},
	bullet(tile, type, angle){
		Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx(), tile.drawy(), angle);
	}
});