export const hasArrayNumbersOnly = (array: string[]): boolean => {
  return array.every((element) => {
    return (
      !isNaN(Number(element)) && Number(element) >= 0 && Number(element) <= 100
    )
  })
}
