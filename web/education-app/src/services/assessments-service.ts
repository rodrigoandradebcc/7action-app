import { AssessmentData } from '../types/Assessment'
import { api } from './config'

async function getAllAssessments() {
  const { data } = await api.get<AssessmentData[]>('assessments')
  return data
}

export { getAllAssessments }
