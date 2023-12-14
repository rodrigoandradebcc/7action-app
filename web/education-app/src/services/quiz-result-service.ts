import { QuizResultData } from '../types/QuizResult'
import { api } from './config'

async function getQuizResult() {
  const { data } = await api.get<QuizResultData>('quiz/result')
  return data
}

export { getQuizResult }
