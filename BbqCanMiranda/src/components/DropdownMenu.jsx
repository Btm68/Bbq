import React from 'react';
import bbq3 from '../assets/bbq3.jpg'; // Ajusta la ruta según la ubicación de tu archivo

const DropdownMenu = ({ isMenuOpen }) => {
    return (
        <div
            className={`relative mt-4 p-4 bg-cover bg-center rounded-lg shadow-lg transition-transform transform ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
            style={{ backgroundImage: `url(${bbq3})` }}
        >
            <div className="relative z-10 p-6 bg-white bg-opacity-80 rounded-lg ">
                <h3 className="text-2xl font-semibold mb-4 text-custom-blue text-custom-text">
                    Menú 11€ x/per.
                </h3>
                <ul className="list-disc pl-5 space-y-4 text-custom-text">
                    <li>
                        <strong>Pica pica:</strong> Patatas, aceitunas, embutidos, quesos, etc...
                    </li>
                    <li>
                        <strong>Entrantes:</strong> Ensaladas, pan tostado con tomate, embutidos
                    </li>
                    <li>
                        <strong>Plato único:</strong> Variedad de carne y tipos hecho en la parrilla, como pinxos marinados, botifarras, xurrasco, costillas, pancetas, patatas hechas al horno, xorizo, arróz blanco, pollo
                    </li>
                    <li>
                        <strong>Postres:</strong> Frutas, helados, pastel o coca
                    </li>
                    <li>
                        <strong>Bebidas:</strong> Vinos blancos y tintos, agua, refrescos variados
                    </li>
                </ul>
                <p className="mt-4 text-sm text-gray-700">
                    *Este menú es un ejemplo de lo que podría haber en la comida, obviamente que si se quiere otra cosa es cuestión de hablarlo.
                </p>
            </div>
        </div>
    );
};

export default DropdownMenu;
