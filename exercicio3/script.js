const numeroArray = [1,5,7,8,4]
const stringArray = ["a", "b", "c"]
const mistoArray = [1,"b", true]

const copiaNumero = numeroArray.slice()
const copiaStringArray = stringArray.slice()
const copiaMistoArray = mistoArray.slice()

numeroArray.push(9)
stringArray.pop("c")
mistoArray.splice(1,1)

console.log(`

${numeroArray}
${copiaNumero}

`)

console.log (`

${stringArray}
${copiaStringArray}

`)

console.log (`

${mistoArray}
${copiaMistoArray}

`)


