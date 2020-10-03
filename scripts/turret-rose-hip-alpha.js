const TurretRoseHipAlpha=extendContent(ItemTurret, "turret-rose-hip-alpha", {
	bullet(tile, type, angle){
		Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx(), tile.drawy(), angle);
	}
});