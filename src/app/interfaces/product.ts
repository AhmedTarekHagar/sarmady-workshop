export interface Product {
    id: number
    title: string
    description: string
    category: string
    video: string
    price: string
    rate: number
    size: number[]
    colors: Color[]
  }
  
  export interface Color {
    name: string
    hex: string
    images: string[]
  }
  