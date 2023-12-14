import { AssessmentData } from '../types/Assessment'
import { api } from './config'

async function getAllMatters() {
  const { data } = await api.get<AssessmentData[]>('matters')
  return data
}

export { getAllMatters }
