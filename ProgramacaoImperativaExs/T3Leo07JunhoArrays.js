var produtosMercado = ["Farinha", "Cerveja", "Cebola", "Alho"]

// join = junta os elementos de uma array
var usandoJuntarPorBarra = produtosMercado.join(" / ")
console.log(usandoJuntarPorBarra)

// pop = elimina o último elemento de uma array
var eliminarItemFinal = produtosMercado.pop()
console.log(eliminarItemFinal)
console.log(produtosMercado)

//push = adiciona elemento no final da array
var voltaAlhoPorFavor = produtosMercado.push("Alho")
console.log(produtosMercado)

//shift = elimina elemento no começo da array
var farinhaNaoPrecisa = produtosMercado.shift()
console.log(farinhaNaoPrecisa)
console.log(produtosMercado)

//unshift = adiciona elemento no começo da array
var farinhaPrecisaSim = produtosMercado.unshift("Farinha")
console.log(produtosMercado)