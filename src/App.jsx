import Header from "./components/Header";

function App() {
  return (
    <>
    <Header></Header>
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Meu Projeto React com Tailwind</h1>
        <p className="text-gray-600">Projeto iniciado com sucesso!</p>
      </div>
    </div>
    </>
  );
}

export default App;