import { StudentData } from '../types/Student'
import { api } from './config'

async function getAllStudents() {
  const { data } = await api.get<StudentData[]>('students')
  return data
}

export { getAllStudents }
