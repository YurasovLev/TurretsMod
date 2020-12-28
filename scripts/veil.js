const Veil = extendContent(ItemTurret, "veil", {});
Veil.buildType = prov(()=>{
	const VeilBuild = extendContent(ItemTurret.ItemTurretBuild, Veil, {
		turnToTarget(tile, targetRot){},
		bullet(type, angle){
			const vec = new Vec2();
			
			var drag=Math.random()+0.01;
			type.drag=(drag>0.5?drag/10:drag);
			
			for(var i=0; i<10; i++){
				this.rotation+=Veil.rotateSpeed;
				vec.trns(this.rotation, 0);

				let lifeScl = type.scaleVelocity ? Mathf.clamp(Mathf.dst(this.x + vec.x, this.y + vec.y, this.targetPos.x, this.targetPos.y) / type.range(), this.minRange / type.range(), this.range / type.range()) : 1;

				type.create(this, this.team, this.x + vec.x, this.y + vec.y, angle, 1 + Mathf.range(Veil.velocityInaccuracy), lifeScl);
			}
		}
	})
	return VeilBuild;
});