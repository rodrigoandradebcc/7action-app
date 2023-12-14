import ReactSelect from 'react-select'
import { getAllStudents } from '../../../services/student-service'
import { useEffect } from 'react'

export function FilterResult() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  async function tryGetAllStudents() {
    try {
      const data = await getAllStudents()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    ;(async () => {
      await tryGetAllStudents()
    })()
  }, [])

  return (
    <section className="w-full flex">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="text-stone-600 text-sm pb-2">Avaliação</p>
          <ReactSelect className="w-80" options={options} />
        </div>
        <div>
          <p className="text-stone-600 text-sm pb-2">Componente</p>
          <ReactSelect className="w-80" options={options} />
        </div>
        <div>
          <p className="text-stone-600 text-sm pb-2">Turma</p>
          <ReactSelect className="w-80" options={options} />
        </div>
        <div>
          <p className="text-stone-600 text-sm pb-2">Aluno</p>
          <ReactSelect className="w-80" options={options} />
        </div>
      </div>
    </section>
  )
}
