import { useEffect, useState } from 'react'
import { getAllCircuits } from '../services/laplink-api'

function useCircuits() {
  const [circuits, setCircuits] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    const data = await getAllCircuits()
    if (data) {
      setCircuits(data)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    isLoading,
    circuits
  }
}
export default useCircuits
