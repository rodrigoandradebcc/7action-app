import {
  QuizRecommendationData,
  QuizResultData,
  QuizResultQueryParams,
} from '../types/QuizResult'
import { api } from './config'

async function getAllQuizResult(params?: QuizResultQueryParams) {
  const { data } = await api.get<QuizResultData[]>('quiz/result', {
    params: {
      studentId: params?.studentId,
      assessmentId: params?.assessmentId,
      matterId: params?.matterId,
      classeId: params?.classeId,
    },
  })
  return data
}

async function getGenerateQuizRecommendation(params?: QuizResultQueryParams) {
  const { data } = await api.get<QuizRecommendationData>(
    'quiz/recommendation',
    {
      params: {
        studentId: params?.studentId,
        assessmentId: params?.assessmentId,
        matterId: params?.matterId,
        classeId: params?.classeId,
      },
    },
  )
  return data
}

export { getAllQuizResult, getGenerateQuizRecommendation }
