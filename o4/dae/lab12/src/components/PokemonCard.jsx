export default function PokemonCard({ p }) {
  return (
    <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/30 hover:scale-105 hover:shadow-xl transition-transform duration-300">
      <div className="flex flex-col items-center">
        <img
          src={p.image}
          alt={p.name}
          className="w-24 h-24 object-contain drop-shadow-md"
        />
        <h3 className="font-bold text-lg capitalize mt-2 text-slate-800 flex items-center gap-1">
          <span className="text-pokeBlue font-semibold">#{p.id}</span>
          <span>{p.name}</span>
        </h3>
        <p className="text-sm text-slate-600 mt-1">Altura: {p.height} m</p>
        <p className="text-sm text-slate-600">Peso: {p.weight} kg</p>

        <div className="flex flex-wrap justify-center gap-1 mt-2">
          {p.types.map(t => (
            <span
              key={t}
              className="px-2 py-1 text-xs rounded-full text-white font-semibold shadow-sm"
              style={{
                backgroundColor: typeColors[t] || '#666'
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3 w-full">
          {p.stats.slice(0, 4).map((s) => (
            <div key={s.name} className="mb-1">
              <div className="flex justify-between text-xs font-semibold text-slate-600">
                <span>{statLabels[s.name] || s.name}</span>
                <span>{s.value}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-500`}
                  style={{
                    width: `${(s.value / 150) * 100}%`,
                    backgroundColor: statColors[s.name] || '#60a5fa'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const typeColors = {
  fire: '#EE8130', water: '#6390F0', grass: '#7AC74C', electric: '#F7D02C',
  ice: '#96D9D6', fighting: '#C22E28', poison: '#A33EA1', ground: '#E2BF65',
  flying: '#A98FF3', psychic: '#F95587', bug: '#A6B91A', rock: '#B6A136',
  ghost: '#735797', dragon: '#6F35FC', dark: '#705746', steel: '#B7B7CE',
  fairy: '#D685AD', normal: '#A8A77A'
}

const statLabels = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defensa',
  speed: 'Velocidad'
}

const statColors = {
  hp: '#ef4444',      
  attack: '#f59e0b',  
  defense: '#3b82f6', 
  speed: '#10b981'   
}

