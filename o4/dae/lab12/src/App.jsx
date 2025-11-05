import { useState } from 'react'
import SearchBar from './components/SearchBar'
import PokemonList from './components/PokemonList'

export default function App() {
  const [query, setQuery] = useState('')
  const [limit, setLimit] = useState(150)
  const [typeFilter, setTypeFilter] = useState('all')
  const [heightFilter, setHeightFilter] = useState({ min: '', max: '' })
  const [sortMode, setSortMode] = useState('id')

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pokeRed via-pokeYellow to-pokeBlue text-slate-900">
      <header className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-pokeRed via-pokeYellow to-pokeBlue blur-md opacity-70 rounded-lg"></div>

        <div className="relative flex justify-center items-center py-6 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 shadow-lg">
          <button
            onClick={() => {
              setQuery('')
              setSortMode('id')
            }}
            title="Ordenar por número de Pokédex"
            className="focus:outline-none"
          >
            <img
              src="/src/assets/pokelogo.png"
              alt="Pokédex Logo"
              className="w-56 sm:w-64 md:w-72 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:scale-105 transition-transform duration-300"
            />
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        <SearchBar
          query={query}
          setQuery={setQuery}
          limit={limit}
          setLimit={setLimit}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          heightFilter={heightFilter}
          setHeightFilter={setHeightFilter}
          setSortMode={setSortMode}
        />

        <PokemonList
          query={query}
          limit={limit}
          typeFilter={typeFilter}
          heightFilter={heightFilter}
          sortMode={sortMode}
        />
      </main>
    </div>
  )
}
