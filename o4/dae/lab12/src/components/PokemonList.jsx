import { useEffect, useState } from 'react'
import { fetchPokemonList, fetchPokemonData } from '../utils/api'
import PokemonCard from './PokemonCard'

function useDebounced(value, delay = 300) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])
  return debounced
}

export default function PokemonList({ query, limit, typeFilter, heightFilter, sortMode }) {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const debouncedQuery = useDebounced(query, 300)

  useEffect(() => {
    let mounted = true
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const list = await fetchPokemonList(limit)
        let filtered = list

        // búsqueda
        if (debouncedQuery.trim()) {
            const q = debouncedQuery.trim().toLowerCase()
            filtered = list.filter(item => item.name.startsWith(q))
            if (filtered.length === 0) {
                filtered = list.filter(item => item.name.includes(q))
            }
        }
        
        filtered.sort((a, b) => {
        const q = debouncedQuery.trim().toLowerCase()
        const aStarts = a.name.startsWith(q)
        const bStarts = b.name.startsWith(q)

        if (aStarts && !bStarts) return -1
        if (!aStarts && bStarts) return 1
        return a.name.localeCompare(b.name)
        })


        // ordenamiento
        if (sortMode === 'alpha') {
          filtered.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sortMode === 'id') {
          filtered.sort((a, b) => {
            const aNum = parseInt(a.url.split('/').slice(-2, -1)[0])
            const bNum = parseInt(b.url.split('/').slice(-2, -1)[0])
            return aNum - bNum
          })
        }

        const detailed = await Promise.all(
          filtered.map(async (r) => {
            try {
              const data = await fetchPokemonData(r.name)
              return {
                id: data.id,
                name: data.name,
                height: (data.height * 0.1).toFixed(1),
                weight: (data.weight / 10).toFixed(1),
                types: data.types.map(t => t.type.name),
                image: data.sprites.front_default,
                stats: data.stats.map(s => ({
                  name: s.stat.name,
                  value: s.base_stat
                })),
              }
            } catch {
              return null
            }
          })
        )

        let final = detailed.filter(Boolean)

        // Filtros
        const minH = Number(heightFilter.min) || 0
        const maxH = Number(heightFilter.max) || Infinity
        final = final.filter(p => p.height >= minH && p.height <= maxH)

        if (typeFilter !== 'all') {
          final = final.filter(p => p.types.includes(typeFilter))
        }

        if (mounted) setPokemons(final)
      } catch (err) {
        if (mounted) setError(err.message)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()
    return () => { mounted = false }
  }, [debouncedQuery, limit, typeFilter, heightFilter.min, heightFilter.max, sortMode])

  return (
    <div className="mt-6">
      {loading && (
        <div className="text-center text-black text-lg font-semibold animate-pulse">
          ⏳ Cargando Pokémon...
        </div>
      )}
      {error && <div className="text-center text-red-600">Error: {error}</div>}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {!loading && pokemons.map(p => (
          <PokemonCard key={p.name} p={p} />
        ))}
      </div>

      {!loading && pokemons.length === 0 && (
        <p className="text-center text-black mt-5 font-semibold">
          No se encontraron Pokémon 😢
        </p>
      )}
    </div>
  )
}
