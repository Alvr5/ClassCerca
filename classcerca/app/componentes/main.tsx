
"use client"

import { useState } from "react"
import Image from "next/image"

const asignaturas = [
  {
    nombre: "Matemáticas",
    descripcion: "Domina los números",
    alumnos: "+500 alumnos",
    valoracion: "4.8",
    icono: "calculator",
    color: "from-blue-500 to-blue-700",
  },
  {
    nombre: "Biología",
    descripcion: "Descubre la vida",
    alumnos: "+320 alumnos",
    valoracion: "4.7",
    icono: "leaf",
    color: "from-emerald-500 to-green-700",
  },
  {
    nombre: "Inglés",
    descripcion: "Mejora tu inglés",
    alumnos: "+450 alumnos",
    valoracion: "4.9",
    icono: "languages",
    color: "from-violet-500 to-purple-700",
  },
  {
    nombre: "Física",
    descripcion: "Comprende el universo",
    alumnos: "+280 alumnos",
    valoracion: "4.6",
    icono: "atom",
    color: "from-orange-500 to-red-600",
  },
  {
    nombre: "Química",
    descripcion: "Aprende experimentando",
    alumnos: "+210 alumnos",
    valoracion: "4.7",
    icono: "flask",
    color: "from-pink-500 to-rose-600",
  },
  {
    nombre: "Historia",
    descripcion: "Viaja al pasado",
    alumnos: "+190 alumnos",
    valoracion: "4.5",
    icono: "landmark",
    color: "from-amber-500 to-yellow-700",
  },
]

export default function Main() {
  const [materia, setMateria] = useState("")
  const [zona, setZona] = useState("")

  function buscar() {
    console.log("Materia:", materia)
    console.log("Zona:", zona)

    setMateria("")
    setZona("")
  }

  return (
    <>
      <section
        id="heroimagen"
        className="relative flex min-h-[500px] mt-5 w-full items-center justify-center overflow-hidden"
      >
        <Image
          src="/heroimg1.jpg"
          alt="Imagen de fondo de ClassCerca"
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-[center_30%] brightness-40"
        />

        <div className="absolute inset-0 z-[1] bg-black/40" />

        <div
          id="buscador"
          className="relative z-10 w-full px-5 py-16 sm:px-8"
        >
          <h1 className="text-center text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Encuentra tu próximo
          </h1>

          <h2 className="mb-6 text-center text-4xl font-extrabold leading-tight text-blue-400 sm:text-5xl lg:text-6xl">
            profesor particular
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-center text-base text-white sm:text-xl">
            Encuentra profesores particulares y aprende a tu ritmo.
          </p>

          <form
            onSubmit={buscar}
            id="inputbuscadores"
            className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row sm:items-center"
          >
            <input
              type="text"
              id="queaprender"
              name="materia"
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
              placeholder="¿Qué quieres aprender?"
              className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#1C73FD] focus:ring-2 focus:ring-[#1C73FD]"
            />

            <select
              name="donde"
              id="zona"
              value={zona}
              onChange={(e) => setZona(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none focus:border-[#1C73FD] focus:ring-2 focus:ring-[#1C73FD]"
            >
              <option value="">¿Dónde?</option>
              <optgroup label="Cataluña">
                <option value="Barcelona">Barcelona</option>
                <option value="Girona">Girona</option>
                <option value="Tarragona">Tarragona</option>
                <option value="Lleida">Lleida</option>
              </optgroup>
            </select>

            <button
              type="submit"
              className="rounded-xl bg-[#1C73FD] px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      <section
        id="sectionasignaturas"
        className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#1C73FD]">
                Aprende a tu ritmo
              </p>

              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Asignaturas populares
              </h2>

              <p className="mt-3 max-w-xl text-slate-600">
                Encuentra el profesor ideal para ti y lleva tus conocimientos
                al siguiente nivel.
              </p>
            </div>

            <span className="text-sm font-medium text-slate-500">
              {asignaturas.length} materias destacadas
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {asignaturas.map((asignatura) => (
              <button
                key={asignatura.nombre}
                type="button"
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1C73FD] focus:ring-offset-2"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${asignatura.color} text-2xl text-white shadow-md`}
                  >
                    {asignatura.icono === "calculator" && "∑"}
                    {asignatura.icono === "leaf" && "🌿"}
                    {asignatura.icono === "languages" && "文"}
                    {asignatura.icono === "atom" && "⚛"}
                    {asignatura.icono === "flask" && "⚗"}
                    {asignatura.icono === "landmark" && "🏛"}
                  </div>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-600">
                    ★ {asignatura.valoracion}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 transition group-hover:text-[#1C73FD]">
                  {asignatura.nombre}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {asignatura.descripcion}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-medium text-slate-500">
                    {asignatura.alumnos}
                  </span>

                  <span className="text-sm font-bold  p-2 rounded-xl text-[#1C73FD] transition group-hover:translate-x-1 cursor-pointer hover:border hover:bg-blue-500 hover:text-white hover:duration-400">
                    Explorar →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div id="eresprofe" className="mx-15 my-10 p-5 bg-blue-500 rounded-xl w-320">
          <h3 className="inline-flex mr-195">¿Eres Profesor particular o lo quieres ser?</h3> <button className="p-3 bg-blue-400 rounded-xl inline-flex cursor-pointer">¡Quiero ser profe!</button>
        </div>

        <footer>
          <div id="copyright" className="text-blue-500 w-full text-center">&copy; Derechos reservados por ClassCerca 2026</div>
        </footer>
      </section>
    </>
  )
}