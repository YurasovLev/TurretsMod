function created(TurretType, Names){
  if(!Names){
    let Name=TurretType;
    let err=false;
    try{
      require(Name);
    }catch(error){
      Log.err(error);
      err=true;
    }finally{
      if(!err)Log.info("Create turret: " + Name + " Successfully")
      else    Log.info("Create turret: " + Name + " Not successful")
    }
    return;
  }
  let Turret = require(TurretType);
  if(!Turret)throw new Error("Not TurretType: "+TurretType);

  Names.forEach(name => {
    let err=false;
    try{
      Turret(name);
    }catch(error){
      Log.err(error);
      err=true;
    }finally{
      if(!err)Log.info("Create " + TurretType + ": " + name + " Successfully")
      else    Log.info("Create " + TurretType + ": " + name + " Not successful")
    }
  });
}

created("CTurret", ["bastion", "rose-hip-alpha", "rose-hip-beta"]);
created("StormTurret", ["hurricane", "calm"]);
created("VolleyTurret", ["volley"]);
created("DoubleTurret", ["large-bronze-turret"]);

created("star")
created("veil")
created("storm")
created("project-omega")