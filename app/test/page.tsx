export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Test Tailwind CSS</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Rouge</h2>
          <p>Ce bloc devrait être rouge</p>
        </div>

        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Bleu</h2>
          <p>Ce bloc devrait être bleu</p>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Vert</h2>
          <p>Ce bloc devrait être vert</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-maze-card border border-maze-accent/30 rounded-lg shadow-glow-sm">
        <h3 className="text-2xl font-bold text-maze-glow mb-4">Test Couleurs Maze</h3>
        <p className="text-maze-text">Ce texte utilise les couleurs personnalisées du thème Maze.</p>
        <button className="mt-4 px-4 py-2 bg-maze-accent text-white rounded-lg hover:bg-blue-700 transition-colors">
          Bouton Test
        </button>
      </div>
    </div>
  )
}
