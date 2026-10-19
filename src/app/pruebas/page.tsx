"use client";

import { useState } from "react";

import Selector from "@/components/pruebas/Selector";
import Detalle from "@/components/pruebas/Detalle";

import datos from "@/Data/datos.json";

export default function Home() {
  const [seleccionado, setSeleccionado] = useState(1);

  const personaje = datos.personajes.find(
    (personaje) => personaje.id === seleccionado
  );

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Selecciona un personaje
      </h1>

      <Selector
        personajes={datos.personajes}
        seleccionado={seleccionado}
        onSeleccionar={setSeleccionado}
      />

      <Detalle personaje={personaje} />
    </main>
  );
}