"use client";

interface Personaje {
  id: number;
  nombre: string;
  imagen: string;
}

interface SelectorProps {
  personajes: Personaje[];
  seleccionado: number;
  onSeleccionar: (id: number) => void;
}

export default function Selector({
  personajes,
  seleccionado,
  onSeleccionar,
}: SelectorProps) {
  return (
    <div className="flex gap-4">
      {personajes.map((personaje) => (
        <button
          key={personaje.id}
          onClick={() => onSeleccionar(personaje.id)}
          className={`border-2 p-2 ${
            seleccionado === personaje.id
              ? "border-blue-500"
              : "border-gray-300"
          }`}
        >
          <img
            src={personaje.imagen}
            alt={personaje.nombre}
            className="w-24 h-24 object-cover"
          />

          <p>{personaje.nombre}</p>
        </button>
      ))}
    </div>
  );
}