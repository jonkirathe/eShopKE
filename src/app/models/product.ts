export interface Product {
  id: number,
  title: string,
  price: number,
  discountedPrice: number,
  quantity: number,
  description: string,
  category: string,
  image: string,
  rating: Rate
}

interface Rate {
  rate: number | bigint,
  count: number
}
