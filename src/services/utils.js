export const calcPercentage = (value, percentage) => (value/100) * percentage

const verifyAnilhas = (value, anilha) => {
  if(value - anilha >= 0) {
    return true
  }
  return false
}

export const calcAnilhas = (gender, value) => {
  let anilhasBoladas = {};
  let anilhas = [55, 45, 35, 25, 15, 10, 5, 2.5];

  let bar;

  if (gender === 'M') {
    bar = 45
  }

  if (gender === 'M') {
    bar = 35
  }

  let sideWheight = (value - bar) / 2

  anilhas.forEach(anilha => {
    let valid =  verifyAnilhas(sideWheight, anilha)
    while(valid === true) {
      sideWheight = sideWheight - anilha;
      anilhasBoladas[anilha] =  anilhasBoladas[anilha] ?  anilhasBoladas[anilha]+ 1 : 1
      valid =  verifyAnilhas(sideWheight, anilha)
    }
  })

  return anilhasBoladas
}

export const orderMovimentsAlphabeticaly = (firebaseObject) => {
  let movimentos = Object.keys(firebaseObject)
  let records = Object.values(firebaseObject)

  let map = new Map()
  for(let i = 0; i< movimentos.length; i++) {
    map.set(movimentos[i], records[i].record)
  }
  
  var mapAsc = new Map([...map.entries()].sort())

  return mapAsc
} 