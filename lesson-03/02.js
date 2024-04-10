const words = ["яблоко", "банан", "апельсин", "манго", "киви"];


let searchResult = words.indexOf("апельсин")

if(searchResult !== -1){
  return console.log("Ура! нашел")
}else{
  return console.log("Придется поискать в другом магазине…")
}



