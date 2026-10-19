"use client";

import { useState } from "react";

import Selector from "@/components/pruebas/Selector";
import Detalle from "@/components/pruebas/Detalle";

// Datos de prueba dentro de la página: así /pruebas no depende de un archivo aparte.
const datos = {
  personajes: [
    {
      id: 1,
      nombre: "Guerrero",
      imagen: "/images/guerrero.jpg",
      descripcion: "Un guerrero especializado en combate cuerpo a cuerpo.",
      nivel: 10,
    },
    {
      id: 2,
      nombre: "Mago",
      imagen: "/images/mago.jpg",
      descripcion: "Un mago capaz de utilizar poderosos hechizos.",
      nivel: 15,
    },
    {
      id: 3,
      nombre: "Arquero",
      imagen: "/images/arquero.jpg",
      descripcion: "Un arquero experto en ataques a distancia.",
      nivel: 12,
    },
    {
      id: 4,
      nombre: "Asesino",
      imagen: "/images/asesino.jpg",
      descripcion: "Un personaje rápido especializado en ataques críticos.",
      nivel: 18,
    },
    {
      id: 5,
      nombre: "Paladín",
      imagen: "/images/paladin.jpg",
      descripcion: "Un guerrero que combina defensa y magia.",
      nivel: 20,
    },
  ],
};

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