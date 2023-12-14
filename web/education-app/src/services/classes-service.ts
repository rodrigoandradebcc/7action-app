import { ClassRoomData } from '../types/ClassRoom'
import { api } from './config'

async function getAllClasses() {
  const { data } = await api.get<ClassRoomData[]>('classes')
  return data
}

export { getAllClasses }
