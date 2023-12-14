import { MatterData } from './Matter'

export interface QuestionData {
  id: number
  name: string
  ability: string
  level: string
  matterId: number
  Matter: MatterData
}
