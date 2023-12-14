import ReactSelect from 'react-select'
import { getAllStudents } from '../../../services/student-service'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { getAllClasses } from '../../../services/classes-service'
import { getAllMatters } from '../../../services/matters-service'
import { getAllAssessments } from '../../../services/assessments-service'
import { SelectType } from '../../../components/Select/types'

interface FilterResultProps {
  handleFilter: () => void
}

export function FilterResult({ handleFilter }: FilterResultProps) {
  const { handleSubmit, control } = useForm()

  const [studentOptions, setStudentOptions] = useState<SelectType[]>([])
  const [assessmentsOptions, setAssessmentsOptions] = useState<SelectType[]>([])
  const [classesRoomOptions, setClassesRoomOptions] = useState<SelectType[]>([])
  const [mattersOptions, setMattersOptions] = useState<SelectType[]>([])

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

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
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="text-stone-600 text-sm pb-2">Avaliação</label>
          <Controller
            name="selectOption"
            control={control}
            defaultValue={null}
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
            name="selectOption"
            control={control}
            defaultValue={null}
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
            name="selectOption"
            control={control}
            defaultValue={null}
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
            name="selectOption"
            control={control}
            defaultValue={null}
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
      <div className="w-full mt-6 flex justify-end">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Gerar Recomendação
        </button>
      </div>
    </section>
  )
}
