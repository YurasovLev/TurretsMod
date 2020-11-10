var wave=new Effects.Effect(15, function(e){
	Draw.color(Color.valueOf('ffd609dd'));
	Lines.stroke(e.fout() * 2);
	Lines.circle(e.x, e.y, 4 + e.finpow() * 20);
});

var shootWave=new Effects.Effect(25, function(e){
	Draw.color(Color.valueOf('ffd609dd'));
	Lines.stroke(e.fout() * 5);
	Lines.circle(e.x, e.y, 4 + e.finpow() * 40);
});

const superNova = extendContent(ItemTurret, "supernova",{
	//Vars.ui.chatfrag.addMessage("Построена  Super New Star!", "Server");
	shoot(tile, type){
		this.super$shoot(tile, type);
		Effects.effect(shootWave, tile.worldx()+4, tile.worldy()+4);
		tile.entity.health=0;
	},
	onDestroyed(tile) {
		this.super$onDestroyed(tile);
		Sounds.explosionbig.at(tile);
		Effects.shake(40, 16, tile.worldx(), tile.worldy());
		Effects.effect(Fx.nuclearShockwave, tile.worldx(), tile.worldy());
		for (var i = 0; i < 4; i++) {
			Time.run(Mathf.random(40), run(() => Effects.effect(Fx.nuclearsmoke, tile.worldx(), tile.worldy())));
		}
		Damage.damage(tile.worldx(), tile.worldy(), 100 * Vars.tilesize, 5000 * 4);
	},
	updateShooting(tile){
		if(!this.eff)this.eff=0;
		if(this.eff<50){
			Effects.effect(wave, tile.worldx()+4, tile.worldy()+4);
			this.eff=0;
		}else this.eff++;
		this.super$updateShooting(tile);
	},
	bullet(tile, type, angle){
		Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx(), tile.drawy(), angle);
	}
});
superNova.size = 6;