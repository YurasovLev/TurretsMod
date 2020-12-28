var items = [
  "bronze",
  "titanit",
  "cryocrystal"
]

for(var i=0; i<items.length; i++){
  var err=false
  try{
    global[items[i]] = extendContent(Item, items[i], {})
  }catch(error){
    err=true
    Log.err(error)
  }
  Log.info("Load item: " + items[i] + (err ? " Not successfully" : " Successfully"))
}