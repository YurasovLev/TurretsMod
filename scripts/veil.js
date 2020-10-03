const veil = extendContent(ItemTurret, "veil", {
	turnToTarget(tile, targetRot){
		entity=tile.ent();
		entity.rotation+=4;
	},
	bullet(tile, type, angle){
		var drag=Math.random()+0.01;
		type.drag=(drag>0.5?drag/10:drag);
		Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx(), tile.drawy(), angle);
	}
});