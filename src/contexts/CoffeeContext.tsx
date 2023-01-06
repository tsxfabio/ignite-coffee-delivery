import { createContext, ReactNode, useState } from 'react'

interface orderCoffeeType {
  quantidadeCafe: number
  addCafe: (value: number) => void
}

export const OrderCoffeeContext = createContext({} as orderCoffeeType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [quantidadeCafe, setQuantidadeCafe] = useState(0)

  function addCafe(value: number) {
    setQuantidadeCafe((state) => state + value)
  }

  return (
    <OrderCoffeeContext.Provider value={{ quantidadeCafe, addCafe }}>
      {children}
    </OrderCoffeeContext.Provider>
  )
}
