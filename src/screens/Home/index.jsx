import DefaultButton from "../../components/DefaultButton"

const Home = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2">

        <div className="flex justify-start items-center h-screen ">
          <div className="grid gap-12 mx-auto md:w-3/4">
            <h1 className="text-5xl serif">Sua doação <br/> transforma vida</h1>
            <p className="text-xl text-slate-700">faça a diferença na na vida dessas pessoas com apenas um clique</p>
            <DefaultButton value="Faça a diferença" />
          </div>
        </div>
        <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        </div>

      </div>

    </div>
  )
}
export default Home