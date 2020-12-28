Log.info('start main [TurretsMod]');
var scripts=[
	"items",
	"Turrets"
]
for(var i=0;i<scripts.length;i++){
	try{
		Log.info('require script: '+scripts[i]);
		require(scripts[i]);
	}catch(err){
		Log.err('Error script: '+scripts[i]);
		Log.err('Error: '+err);
	};
};
Log.info('End main [TurretsMod]');