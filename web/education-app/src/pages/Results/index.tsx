import { useEffect, useState } from 'react'
import { QuizResultData, QuizResultQueryParams } from '../../types/QuizResult'
import { FilterResult } from './components/FilterResult'
import { getAllQuizResult } from '../../services/quiz-result-service'

export function Results() {
  const [result, setResult] = useState<QuizResultData[]>([])

  function handleGenerateResult(params?: QuizResultQueryParams) {
    tryGetAllResults(params)
  }

  async function tryGetAllResults(params?: QuizResultQueryParams) {
    try {
      const data = await getAllQuizResult(params)
      setResult(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="mt-5">
      <FilterResult handleFilter={handleGenerateResult} />
      <section className="space-y-4">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table
                  className="min-w-full divide-y divide-gray-300"
                  style={{ borderSpacing: 0 }}
                >
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                      >
                        avaliação
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                      >
                        matéria
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                      >
                        habilidades
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                      >
                        alunos
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                      >
                        acertos
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {/* {loading && (
                          <tr>
                            <td
                              colSpan={6}
                              className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"
                            >
                              Carregando...{' '}
                            </td>
                          </tr>
                        )} */}
                    {result?.length === 0 && (
                      <tr>
                        <td
                          colSpan={6}
                          className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"
                        >
                          Nenhum resultado encontrado
                        </td>
                      </tr>
                    )}
                    {result &&
                      result.length > 0 &&
                      result.map((item) => (
                        <tr key={item.id}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.Assessment.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.Question.Matter.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.Question.ability}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.Student.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.result ? 'Sim' : 'Não'}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
