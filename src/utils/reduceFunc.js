const reduceFunc = (list, index = 0) => {
  if (!list[index + 1]) return list[index]()
  return list[index](reduceFunc(list, index + 1))
}

export default reduceFunc
