import { AssessmentData } from './Assessment'
import { QuestionData } from './Question'
import { StudentData } from './Student'

export interface QuizResultData {
  id: number
  result: boolean
  studentId: number
  questionId: number
  assessmentId: number
  Question: QuestionData
  Assessment: AssessmentData
  Student: StudentData
}

export interface QuizResultQueryParams {
  studentId: string
  assessmentId: string
  matterId: string
  classeId: string
}

export interface QuizResultForm {}
