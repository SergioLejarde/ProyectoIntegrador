import React from 'react';
import { Helmet } from "react-helmet-async";
import QRCode from 'react-qr-code';  // Usamos directamente 'react-qr-code'

const Factura = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleExit = () => {
    console.log('Salir');
  };

  return (
    <>
      <Helmet>
        <title>Factura</title>
        <meta name="description" content="Factura electrónica de venta de VITAMED IPS SALUD INTEGRAL S.A. Incluye detalles del paciente, items y métodos de pago." />
        <meta name="keywords" content="Factura, VITAMED, Paciente, Salud, Pago" />
      </Helmet>

      <div className="relative flex flex-col items-center p-10">
        {/* Botones */}
        <div className="absolute top-10 left-10 flex flex-col space-y-4 print:hidden">
          <button
            onClick={handlePrint}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Imprimir
          </button>
          <button
            onClick={handleExit}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Salir
          </button>
        </div>

        {/* Contenedor de la Factura */}
        <div className="w-full max-w-screen-lg border border-black p-5 mb-100">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-5">
            <img
              alt="Logo de la Empresa"
              src="/src/Front/assets/Logo.png"
              className="w-40 h-40"
            />
            <div className="text-start flex-grow mx-5">
              <h1 className="text-lg font-bold">INTERVITAL</h1>
              <p className="text-sm">Factura Electrónica de Venta</p>
              <p className="text-sm">Factura No:</p>
              <p className="text-sm">Fecha Generación:</p>
              <p className="text-sm">Fecha Vencimiento:</p>
            </div>
            <div className="text-center mb-5 flex">
              <QRCode value="https://example.com" size={100} />  {/* Renderiza el QR */}
            </div>
          </div>

          {/* Detalles */}
          <table className="w-full mb-5 border-collapse">
            <tbody>
              <tr>
                <td className="border border-black p-2">DIRECCION:</td>
                <td className="border border-black p-2">NIT:</td>
              </tr>
              <tr>
                <td className="border border-black p-2">TEL:</td>
                <td className="border border-black p-2">FORMA DE PAGO:</td>
              </tr>
            </tbody>
          </table>

          {/* Detalles del Paciente */}
          <table className="w-full mb-5 border-collapse">
            <tbody>
              <tr>
                <td className="border border-black p-2">PACIENTE:</td>
                <td className="border border-black p-2">CIUDAD:</td>
              </tr>
              <tr>
                <td className="border border-black p-2">CC:</td>
                <td className="border border-black p-2">DIRECCION:</td>
              </tr>
              <tr>
                <td className="border border-black p-2">TELEFONO:</td>
              </tr>
            </tbody>
          </table>

          {/* Items */}
          <table className="w-full mb-5">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2">ITEM</th>
                <th className="border border-black p-2">CODIGO</th>
                <th className="border border-black p-2">DESCRIPCION</th>
                <th className="border border-black p-2">CANTIDAD</th>
                <th className="border border-black p-2">VALOR UNITARIO</th>
                <th className="border border-black p-2">% IMP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2"></td>
                <td className="border border-black p-2"></td>
                <td className="border border-black p-2"></td>
                <td className="border border-black p-2"></td>
                <td className="border border-black p-2"></td>
                <td className="border border-black p-2"></td>
              </tr>
            </tbody>
          </table>

          {/* Total */}
          <table className="w-full mb-5 border-collapse">
            <tbody>
              <tr>
                <td className="border border-black p-2">VALOR TOTAL</td>
              </tr>
              <tr>
                <td className="border border-black p-2">$</td>
              </tr>
            </tbody>
          </table>

          {/* Medios de Pago */}
          <table className="w-full mb-5 border-collapse">
            <tbody>
              <tr>
                <td className="border border-black p-2">Medios de Pago</td>
              </tr>
              <tr>
                <td className="border border-black p-2">Banco</td>
                <td className="border border-black p-2">Pago online</td>
              </tr>
            </tbody>
          </table>

          {/* Pie de Página */}
          <div className="text-center">
            <img
              alt="Logo del Pie"
              src="/src/Front/assets/Logo.png"
              className="w-40 h-40 m-auto"
            />
            <p className="text-xs">Representación impresa de Factura de Venta</p>
          </div>
        </div>

        {/* Estilos específicos para impresión */}
        <style>
          {`
            @media print {
              .print\\:hidden {
                display: none;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Factura;
