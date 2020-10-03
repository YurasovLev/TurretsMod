function charge(color, size){
		return newEffect(38, e => {
			Draw.color(color);
			Angles.randLenVectors(e.id, 2, 1 + size * e.fout(), e.rotation, 120, Floatc2((x, y) => {
				Lines.lineAngle(e.x+x, e.y+y, Mathf.angle(x, y), 4);
			}));
			Fill.circle(e.x, e.y, 3*e.fin());
		});
};

function shoot(color1, color2, size, int){
		return newEffect(15, e => {
			Draw.color(color1, color2, e.fin());
			Angles.randLenVectors(e.id, int, 1 + size * e.finpow(), e.rotation, 20, Floatc2((x, y) => {
				Lines.lineAngle(e.x+x, e.y+y, Mathf.angle(x, y), 3 + 2 * e.fout());
			}));
		});
};

//Bullet
const laser = extend(BasicBulletType,  {
	draw(b){
		var baseLen = this.length * b.fout();
		for(var s = 0; s < this.colors.length; s++){
			Draw.color(this.tmpColor.set(this.colors[s]).mul(1 + Mathf.absin(Time.time(), 1, 0.1)));
			for(var i = 0; i < this.tscales.length; i++){
				Tmp.v1.trns(b.rot() + 180, (this.lenscales[i] - 1) * 35);
				Lines.stroke((9 + Mathf.absin(Time.time(), 0.8, 1.5)) * b.fout() * this.strokes[s] * this.tscales[i]);
				Lines.lineAngle(b.x + Tmp.v1.x, b.y + Tmp.v1.y, b.rot(), baseLen * this.lenscales[i], CapStyle.none);
			};
		};
		Draw.reset();
	},
	update(b){
		if(b.timer.get(1, 5)){
			Damage.collideLine(b, b.getTeam(), this.hitEffect, b.x, b.y, b.rot(), this.length, true);
		};
		Effects.shake(1, 1, b.x, b.y);
	}
});
laser.length = 220;
laser.strokes = [2, 1.5, 1, 0.3];
laser.colors = [Color.red, Color.valueOf('FF4800'), Color.valueOf('FF9000')];
laser.tscales = [0.8, 0.75, 0.7, 0.65, 0.6, 0.5, 0.4];
laser.lenscales = [0.5, 0.6, 0.7, 1.11, 1.12, 1.13, 1.135];
laser.tmpColor = new Color();
laser.hitSize = 4;
laser.drawSize = 420;
laser.lifetime = 13;
laser.speed = 0.1;
laser.damage = 220.0;
laser.pierce = true;

const hellTurret  = extendContent(LaserTurret, "turret-hell-tower", {});
hellTurret.shootType=laser;