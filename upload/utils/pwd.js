function encode(strs) {
  let arr = strs.toString().split("")
  const newArr = arr.map((str, index) => {
    return String.fromCharCode(str.charCodeAt() + index)
  })
  console.log(newArr)

  return newArr.join("")
}

function decode(strs) {
  let arr = strs.toString().split("")
  const newArr = arr.map((str, index) => {
    return String.fromCharCode(str.charCodeAt() - index)
  })
  console.log(newArr)

  return newArr.join("")
}

export { encode, decode }
