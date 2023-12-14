import { QuizResultData, QuizResultQueryParams } from '../types/QuizResult'
import { api } from './config'

async function getQuizResult(params: QuizResultQueryParams) {
  const { data } = await api.get<QuizResultData>('quiz/result', {
    params: {
      studentId: params.studentId,
      assessmentId: params.assessmentId,
      matterId: params.matterId,
      classeId: params.classeId,
    },
  })
  return data
}

export { getQuizResult }
