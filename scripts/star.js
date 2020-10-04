const star = extendContent(ItemTurret, "star", {
	r: false,
	rot: 90,
	drawLayer(tile){
		var entity=tile.ent();
		tr2.trns(0, -entity.recoil);
		drawer.get(tile, entity);
		heatDrawer.get(tile, entity);
	},
	turnToTarget(tile, targetRot){
		entity=tile.ent();
		if(this.r?entity.rotation<=this.rot:entity.rotation>=this.rot){
			this.r=!this.r;
			this.rot=(this.r?0:90);
			this.shots+=2;
			if(this.shots>10)this.shots=4;
			this.spread=360/this.shots;
		}else{
			entity.rotation+=(this.r?-1:1);
		};
			
	},
	bullet(tile, type, angle){
		Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx(), tile.drawy(), angle);
	}
});