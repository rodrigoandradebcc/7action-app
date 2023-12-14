import { AssessmentData } from './Assessment'
import { QuestionData } from './Question'

export interface QuizResultData {
  id: number
  result: boolean
  studentId: number
  questionId: number
  assessmentId: number
  Question: QuestionData
  Assessment: AssessmentData
}
