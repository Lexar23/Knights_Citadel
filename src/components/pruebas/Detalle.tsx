interface Personaje {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  nivel: number;
}

interface DetalleProps {
  personaje?: Personaje;
}

export default function Detalle({ personaje }: DetalleProps) {
  if (!personaje) {
    return <p>Selecciona un personaje.</p>;
  }

  return (
    <div className="mt-8">
      <img
        src={personaje.imagen}
        alt={personaje.nombre}
        className="w-64 h-64 object-cover"
      />

      <h2 className="text-2xl font-bold">
        {personaje.nombre}
      </h2>

      <p>{personaje.descripcion}</p>

      <p>Nivel: {personaje.nivel}</p>
    </div>
  );
}