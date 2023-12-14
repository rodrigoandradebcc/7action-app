import { Results } from './pages/Results'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="h-screen bg-slate-100 flex justify-center">
        <div className="w-full max-w-7xl py-24">
          <Results />
        </div>
      </main>
    </>
  )
}

export default App
