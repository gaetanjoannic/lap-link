import axios from 'axios'
import Config from 'react-native-config'

const dbAPI = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

export const getAllCircuits = async () => {
  try {
    return await dbAPI.get('/circuits')
  } catch (error) {
    console.error('Error fetching circuits:', error)
    throw error
  }
}

export const getCircuitById = async (id) => {
  try {
    return await dbAPI.get(`/circuits/${id}`)
  } catch (error) {
    console.error(`Error fetching circuit ${id}:`, error)
    throw error
  }
}
