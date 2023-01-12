import { createContext, ReactNode, useEffect, useState } from 'react'

//Interfaces
export interface itemOrderType {
  imagem: string
  name: string
  price: number
  quantidade: number
}

export interface CoffeesType {
  id: number
  img: string
  name: string
  tags: string[]
  description: string
  price: number
}

export interface orderPriceType {
  itensPrice: number
  fretePrice: number
  totalPrice: number
}

export interface orderCoffeeType {
  coffees: CoffeesType[]
  itemOrder: itemOrderType[]
  orderPrice: orderPriceType
  setOrderPrice: (orderPrice: orderPriceType) => void
  handleInputOrderSubmit: (
    imagem: string,
    name: string,
    quantidade: number,
    price: number
  ) => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

//Context
export const OrderCoffeeContext = createContext({} as orderCoffeeType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeesType[]>([
    {
      id: 1,
      img: '/src/assets/CoffeeTypes/ExpressocoffeeIcon.png',
      name: 'Expresso Tradicional',
      tags: ['Tradicional'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.99,
    },
    {
      id: 2,
      img: '/src/assets/CoffeeTypes/AmericanocoffeeIcon.png',
      name: 'Expresso Americano',
      tags: ['Tradicional'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.99,
    },
    {
      id: 3,
      img: '/src/assets/CoffeeTypes/ExpressoCremosocoffeeIcon.png',
      name: 'Expresso Cremoso',
      tags: ['Tradicional'],
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.99,
    },
    {
      id: 4,
      img: '/src/assets/CoffeeTypes/CafeGeladocoffeeIcon.png',
      name: 'Expresso Gelado',
      tags: ['Tradicional', 'Gelado'],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.99,
    },
    {
      id: 5,
      img: '/src/assets/CoffeeTypes/CafecomLeitecoffeeIcon.png',
      name: 'Café com Leite',
      tags: ['Tradicional', 'Com Leite'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.99,
    },
    {
      id: 6,
      img: '/src/assets/CoffeeTypes/LattecoffeeIcon.png',
      name: 'Latte',
      tags: ['Tradicional', 'Com Leite'],
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.99,
    },
    {
      id: 7,
      img: '/src/assets/CoffeeTypes/CapuccinocoffeeIcon.png',
      name: 'Capuccino',
      tags: ['Tradicional', 'Com Leite'],
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.99,
    },
    {
      id: 8,
      img: '/src/assets/CoffeeTypes/MacchiatocoffeeIcon.png',
      name: 'Macchiato',
      tags: ['Tradicional', 'Com Leite'],
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.99,
    },
    {
      id: 9,
      img: '/src/assets/CoffeeTypes/MochaccinocoffeeIcon.png',
      name: 'Mochaccino',
      tags: ['Tradicional', 'Com Leite'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.99,
    },
    {
      id: 10,
      img: '/src/assets/CoffeeTypes/ChocolateQuentecoffeeIcon.png',
      name: 'Chocolate Quente',
      tags: ['Especial', 'Com Leite'],
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.99,
    },
    {
      id: 11,
      img: '/src/assets/CoffeeTypes/CubanocoffeeIcon.png',
      name: 'Cubano',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.99,
    },
    {
      id: 12,
      img: '/src/assets/CoffeeTypes/HavaianocoffeeIcon.png',
      name: 'Havaiano',
      tags: ['Especial'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.99,
    },
    {
      id: 13,
      img: '/src/assets/CoffeeTypes/ArabecoffeeIcon.png',
      name: 'Árabe',
      tags: ['Especial'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.99,
    },
    {
      id: 14,
      img: '/src/assets/CoffeeTypes/IrlandescoffeeIcon.png',
      name: 'Irlandês',
      tags: ['Especial', 'Alcoólico'],
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.99,
    },
  ])
  const [itemOrder, setItemOrder] = useState<itemOrderType[]>([])
  const [orderPrice, setOrderPrice] = useState<orderPriceType>({
    itensPrice: 0,
    fretePrice: 0,
    totalPrice: 0,
  })

  useEffect(() => {
    cleanOrderPrice()
    calcOrderPrice()
  }, [itemOrder])

  useEffect(() => {
    calcFretePrice()
  }, [orderPrice.itensPrice])

  function handleInputOrderSubmit(
    imagem: string,
    name: string,
    quantidade: number,
    price: number
  ) {
    setItemOrder((state) => [...state, { imagem, name, quantidade, price }])
  }

  function cleanOrderPrice() {
    setOrderPrice({
      itensPrice: 0,
      fretePrice: 0,
      totalPrice: 0,
    })
  }

  function calcOrderPrice() {
    itemOrder.map((item) => {
      setOrderPrice((state) => ({
        itensPrice: state.itensPrice + item.price * item.quantidade,
        fretePrice: state.itensPrice < 50 ? 15.99 : 0,
        totalPrice: state.itensPrice + state.fretePrice,
      }))
    })
  }

  //Ajustar valor do frete
  function calcFretePrice() {
    setOrderPrice((state) => {
      return {
        ...state,
        fretePrice:
          state.itensPrice === 0 ? 0 : state.itensPrice < 50 ? 15.99 : 0,
        totalPrice: state.itensPrice + state.fretePrice,
      }
    })
  }

  return (
    <OrderCoffeeContext.Provider
      value={{
        coffees,
        itemOrder,
        handleInputOrderSubmit,
        orderPrice,
        setOrderPrice,
      }}
    >
      {children}
    </OrderCoffeeContext.Provider>
  )
}
