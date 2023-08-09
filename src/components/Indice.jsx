import React from "react";

function Indice({ totalPáginas, páginaActual, cambiarPágina }) {
  const páginas = [];
  for (let i = 0; i < totalPáginas; i++) {
    páginas.push(
      <div
        key={i}
        className={`cursor-pointer text-xl ${
          páginaActual === i ? "text-black" : "text-gray-500"
        }`}
        onClick={() => cambiarPágina(i)}
      >
        {páginaActual === i ? "◉" : "○"}
      </div>
    );
  }

  return <div className="flex gap-2">{páginas}</div>;
}

export default Indice;
