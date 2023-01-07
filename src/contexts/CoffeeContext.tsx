import { createContext, ReactNode, useState } from 'react'

export interface orderCoffeeType {
  itemOrder: itemOrderType[]
  handleInputOrderSubmit: (
    name: string,
    quantidade: number,
    price: number
  ) => void
}

export interface itemOrderType {
  name: string
  quantidade: number
  price: number
}

export const OrderCoffeeContext = createContext({} as orderCoffeeType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [itemOrder, setItemOrder] = useState<itemOrderType[]>([])

  function handleInputOrderSubmit(
    name: string,
    quantidade: number,
    price: number
  ) {
    setItemOrder((state) => [...state, { name, quantidade, price }])
  }

  return (
    <OrderCoffeeContext.Provider value={{ itemOrder, handleInputOrderSubmit }}>
      {children}
    </OrderCoffeeContext.Provider>
  )
}
