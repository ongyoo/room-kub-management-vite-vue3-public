export const priceFormat = (p: number, unit: string): string => {
  const price: string = p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return price + ' ' + unit
}
