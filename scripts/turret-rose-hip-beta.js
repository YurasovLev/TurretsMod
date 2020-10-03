const TurretRoseHipBeta=extendContent(ItemTurret, "turret-rose-hip-beta", {
	bullet(tile, type, angle){
		Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx(), tile.drawy(), angle);
	}
});