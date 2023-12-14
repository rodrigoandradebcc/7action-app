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
    <section className="w-full flex flex-col">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="text-stone-600 text-sm pb-2">Avaliação</p>
          <ReactSelect
            className="col-span-full min-w-full z-30"
            options={options}
            placeholder="Selecione uma avaliação"
          />
        </div>
        <div>
          <p className="text-stone-600 text-sm pb-2">Componente</p>
          <ReactSelect
            className="col-span-full min-w-full z-30"
            options={options}
            placeholder="Selecione um componente"
          />
        </div>
        <div>
          <p className="text-stone-600 text-sm pb-2">Turma</p>
          <ReactSelect
            className="col-span-full min-w-full z-30"
            options={options}
            placeholder="Selecione uma turma"
          />
        </div>
        <div>
          <p className="text-stone-600 text-sm pb-2">Aluno</p>
          <ReactSelect
            className="col-span-full min-w-full z-30"
            options={options}
            placeholder="Selecione um aluno"
          />
        </div>
      </div>
      <div className="w-full mt-6 flex justify-end">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Gerar Resultado
        </button>
      </div>
    </section>
  )
}
