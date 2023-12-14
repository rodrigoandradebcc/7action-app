import logoImg from './../../../public/logoWhite.png'

export function Navbar() {
  return (
    <section className="flex w-full h-20 relative bg-purple-700 px-12 py-1">
      <img className="bottom-8 left-8" src={logoImg} alt="logo" />
    </section>
  )
}
