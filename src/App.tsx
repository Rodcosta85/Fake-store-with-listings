import { useEffect } from 'react'
import type { ProductTypes } from './types/typings'
import axios from 'axios'
import useProducts from './hooks/useProducts'
import HambDropdown from './components/HambDropdown'
import ProductCard from './components/ProductCard'
import LoadingSpinner from './components/LoadingSpinner'

function App() {

  const { isError400, data, isLoading, setIsError400, setData, setIsLoading } = useProducts()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get<ProductTypes[]>('https://fakestoreapi.com/products');
        setData(response.data)
      } catch (error) {
        if ((error as any).response && (error as any).response.status === 400) {
          setIsError400
        } else {
          console.log('An unexpected error ocurred:', error)
        }
      } finally {
        setIsLoading
      }
    }
    getProducts()
  }, [])

  return (
    isLoading ? <LoadingSpinner /> :
      <div className='flex flex-col justify-center gap-8'>

        <header className='w-full pt-8 pb-8 pl-10 pr-10 flex justify-center border-b border-black'>
          <div className='w-276 flex justify-between'>
            <h1>
              <span>THE </span>
              clothing store
            </h1>
            <HambDropdown />
          </div>
        </header>
        
        {isError400 ? 'This API call has gone wrong!' :
          <main className='w-full pt-8 pb-8 pl-10 pr-10 flex justify-center'>
            <div className='w-276 flex flex-col justify-between'>
              <div className='grid grid-cols-3 gap-8'>
                {data.map((product: ProductTypes, id: number) => (
                  <ProductCard product={product} key={id} />
                ))}
              </div>
            </div>
          </main>
        }

      </div>
  )
}

export default App