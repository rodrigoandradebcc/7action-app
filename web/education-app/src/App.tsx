import { Results } from './pages/Results'

function App() {
  return (
    <>
      <main className="h-screen bg-slate-100 flex justify-center">
        <div className="w-full max-w-7xl py-24">
          <h1 className="text-xl text-slate-900 ">Dados do aluno</h1>
          <Results />
        </div>
      </main>
    </>
  )
}

export default App
