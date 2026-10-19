
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="flex w-full items-center px-5 py-5 pb-0"
    >
      <Image
        className="mr-2"
        src="/Logo.png"
        width={40}
        height={40}
        alt="Logo de ClassCerca"
      />

      <h2 className="whitespace-nowrap text-2xl font-bold text-black">
        ClassCerca
      </h2>

      <ul className="ml-10 flex items-center gap-6 whitespace-nowrap text-black text-s">
        <li className="cursor-pointer hover:underline">
          Inicio
        </li>
        <li className="cursor-pointer hover:underline">
          Buscar Clases
        </li>
        <li className="cursor-pointer hover:underline">
          Profesores
        </li>
        <li className="cursor-pointer hover:underline">
          Cómo funciona
        </li>
        <li className="cursor-pointer hover:underline">
          Precios
        </li>
      </ul>

      <div className="ml-auto flex shrink-0 items-center gap-3">
        <button
          id="iniciar-sesion"
          className="whitespace-nowrap rounded-md border border-[#1C73FD] cursor-pointer bg-white px-4 py-2 text-[#1C73FD] transition-colors duration-200 hover:bg-blue-50"
        >
          Iniciar Sesión
        </button>

        <button
          id="registrarse"
          className="whitespace-nowrap rounded-md border border-[#1C73FD] cursor-pointer bg-[#1C73FD] px-4 py-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Registrarse
        </button>
      </div>
    </nav>
  )
}
