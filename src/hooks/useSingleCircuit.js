import { useState } from 'react'
import { getCircuitById } from '../services/laplink-api'

function useSingleCircuit() {
  const [circuit, setCircuit] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getCircuitData = async (id) => {
    setIsLoading(true)
    try {
      const data = await getCircuitById(id)
      if (data) {
        setCircuit(data)
      }
    } catch (error) {
      console.error('Error fetching circuit:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    circuit,
    getCircuitData
  }
}

export default useSingleCircuit
