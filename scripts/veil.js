const veil = extendContent(ItemTurret, "veil", {
	turnToTarget(tile, targetRot){},
	bullet(tile, type, angle){
		var drag=Math.random()+0.01;
		type.drag=(drag>0.5?drag/10:drag);
		entity=tile.ent();
		for(var i=0; i<10; i++){
			entity.rotation+=4;
			Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx(), tile.drawy(), angle);
		}
	}
});