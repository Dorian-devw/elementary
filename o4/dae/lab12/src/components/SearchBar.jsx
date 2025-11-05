export default function SearchBar({
  query, setQuery, limit, setLimit,
  typeFilter, setTypeFilter, heightFilter, setHeightFilter, setSortMode
}) {
  const types = [
    'all','normal','fire','water','grass','electric','ice','fighting','poison','ground','flying',
    'psychic','bug','rock','ghost','dragon','dark','steel','fairy'
  ]

  return (
    <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-wrap gap-3 items-center">
        <input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value)
            if (e.target.value.trim() !== '') setSortMode('alpha')
          }}
          placeholder="🔍 Busca un Pokémon..."
          className="flex-1 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-pokeBlue"
        />

        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className="p-3 border rounded-xl focus:ring-2 focus:ring-pokeYellow cursor-pointer"
        >
          {types.map(t => (
            <option key={t} value={t}>
              {t === 'all' ? 'Todos los tipos' : t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={limit}
          min="20"
          step="10"
          onChange={e => setLimit(Number(e.target.value))}
          className="w-28 p-3 border rounded-xl focus:ring-2 focus:ring-pokeRed"
          title="Cantidad de Pokémon"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-3 items-center">
        <label className="text-sm font-semibold text-slate-700">Altura mínima</label>
        <input
          type="number"
          value={heightFilter.min}
          onChange={e => setHeightFilter({ ...heightFilter*0.1, min: e.target.value })}
          className="p-2 border rounded-lg focus:ring-2 focus:ring-pokeBlue w-24"
        />
        <label className="text-sm font-semibold text-slate-700">Altura máxima</label>
        <input
          type="number"
          value={heightFilter.max}
          onChange={e => setHeightFilter({ ...heightFilter*0.1, max: e.target.value })}
          className="p-2 border rounded-lg focus:ring-2 focus:ring-pokeBlue w-24"
        />
      </div>
    </div>
  )
}
