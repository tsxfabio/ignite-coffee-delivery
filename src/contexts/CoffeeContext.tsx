import { createContext, ReactNode, useState } from 'react'

interface orderCoffeeType {
  itemOrder: number
  setItemOrder: (itemOrder: number) => void
}

export const OrderCoffeeContext = createContext({} as orderCoffeeType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [itemOrder, setItemOrder] = useState(33)

  return (
    <OrderCoffeeContext.Provider value={{ itemOrder, setItemOrder }}>
      {children}
    </OrderCoffeeContext.Provider>
  )
}
