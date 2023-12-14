import ReactSelect from 'react-select'
import { getAllStudents } from '../../../services/student-service'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { getAllClasses } from '../../../services/classes-service'
import { getAllMatters } from '../../../services/matters-service'
import { getAllAssessments } from '../../../services/assessments-service'
import { SelectType } from '../../../components/Select/types'
import {
  QuizResultForm,
  QuizResultQueryParams,
} from '../../../types/QuizResult'
import toast from 'react-hot-toast'

interface FilterResultProps {
  handleFilter: (params?: QuizResultQueryParams) => void
  handleGenerateRecommendation: (params?: QuizResultQueryParams) => void
}

export function FilterResult({
  handleFilter,
  handleGenerateRecommendation,
}: FilterResultProps) {
  const { handleSubmit, control, getValues } = useForm<QuizResultForm>()

  function handleGetGenerateRecommendation() {
    console.log('rolando')

    const values = getValues()
    handleGenerateRecommendation({
      assessmentId: values.assessmentId.value,
      classeId: values.classeId.value,
      matterId: values.matterId.value,
      studentId: values.studentId.value,
    })
  }

  const [studentOptions, setStudentOptions] = useState<SelectType[]>([])
  const [assessmentsOptions, setAssessmentsOptions] = useState<SelectType[]>([])
  const [classesRoomOptions, setClassesRoomOptions] = useState<SelectType[]>([])
  const [mattersOptions, setMattersOptions] = useState<SelectType[]>([])

  async function tryGetAllStudents() {
    try {
      const data = await getAllStudents()
      const studentsObject = data?.map((student) => {
        return {
          label: student.name,
          value: String(student.id),
        }
      })
      setStudentOptions(studentsObject)
    } catch (error) {
      console.error(error)
    }
  }

  async function tryGetAllClasses() {
    try {
      const data = await getAllClasses()
      const classeRoomObject = data?.map((classeRoom) => {
        return {
          label: classeRoom.name,
          value: String(classeRoom.id),
        }
      })
      setClassesRoomOptions(classeRoomObject)
    } catch (error) {
      console.error(error)
    }
  }

  async function tryGetAllMatters() {
    try {
      const data = await getAllMatters()
      const mattersObject = data?.map((matters) => {
        return {
          label: matters.name,
          value: String(matters.id),
        }
      })
      setMattersOptions(mattersObject)
    } catch (error) {
      console.error(error)
    }
  }

  async function tryGetAllAssessments() {
    try {
      const data = await getAllAssessments()
      const assessmentsObject = data?.map((assessments) => {
        return {
          label: assessments.name,
          value: String(assessments.id),
        }
      })
      setAssessmentsOptions(assessmentsObject)
    } catch (error) {
      console.error(error)
    }
  }

  async function onSubmit(data: QuizResultForm) {
    try {
      handleFilter({
        assessmentId: data.assessmentId.value,
        classeId: data.classeId.value,
        matterId: data.matterId.value,
        studentId: data.studentId.value,
      })
      toast.success('Filtrado com sucesso!')
    } catch (error) {
      toast.success('Ocorreu um erro ao filtra, tente novamente mais tarde!')
    }
  }

  useEffect(() => {
    ;(async () => {
      await Promise.all([
        tryGetAllClasses(),
        tryGetAllStudents(),
        tryGetAllMatters(),
        tryGetAllAssessments(),
      ])
    })()
  }, [])

  return (
    <section className="w-full flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="text-stone-600 text-sm pb-2">Avaliação</label>
            <Controller
              name="assessmentId"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  className="col-span-full min-w-full z-30"
                  options={assessmentsOptions}
                  placeholder="Selecione uma avaliação"
                />
              )}
            />
          </div>
          <div>
            <label className="text-stone-600 text-sm pb-2">Componente</label>
            <Controller
              name="matterId"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  className="col-span-full min-w-full z-30"
                  options={mattersOptions}
                  placeholder="Selecione um componente"
                />
              )}
            />
          </div>
          <div>
            <label className="text-stone-600 text-sm pb-2">Turma</label>
            <Controller
              name="classeId"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  className="col-span-full min-w-full z-30"
                  options={classesRoomOptions}
                  placeholder="Selecione uma turma"
                />
              )}
            />
          </div>
          <div>
            <label className="text-stone-600 text-sm pb-2">Aluno</label>
            <Controller
              name="studentId"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  className="col-span-full min-w-full z-30"
                  options={studentOptions}
                  placeholder="Selecione um aluno"
                />
              )}
            />
          </div>
        </div>
        <div className="w-full mt-6 flex justify-end gap-4">
          <button
            className="bg-white hover:bg-purple-100 text-purple-600 font-bold py-2 px-4 rounded border border-purple-600"
            type="submit"
          >
            Filtrar
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleGetGenerateRecommendation}
          >
            Gerar Recomendação
          </button>
        </div>
      </form>
    </section>
  )
}
