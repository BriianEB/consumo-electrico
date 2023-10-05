import { useEffect, useState } from 'react';

import Badge from '@/_shared/components/Badge';
import Card from '@/_shared/components/Card';
import Input from '@/_shared/components/Input';
import Select from '@/_shared/components/Select';
import Spinner from '@/_shared/components/Spinner';

function CaptureResults() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center pt-10">
        <Spinner className="!text-blue-400 !w-10 !h-10" />
      </div>
    );
  }

  return (
    <>
      <Card>
        <div className="pb-6 flex justify-between">
          <div>
            <Input name="find" type="text" className="!w-[30rem]" placeholder="Buscar..." />
          </div>

          <div className="flex">
            <Select name="filter" label="Filtrar por:" className="!min-w-[10rem] !mr-6" />
            <Select name="filter" label="Agrupar por:" className="!min-w-[10rem]" />
          </div>
        </div>

        <table className="table-auto bg-white w-full border-collapse rounded-t-lg overflow-hidden">
          <thead>
            <tr className="rounded-lg">
              <th className="bg-gray-250 px-3 py-4 text-left">Archivo</th>
              <th className="bg-gray-250 px-3 py-4 text-left">Estatus</th>
              <th className="bg-gray-250 px-3 py-4 text-left">Mensaje</th>
              <th className="bg-gray-250 px-3 py-4 text-left">Cliente</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-4 text-left text-blue-400">392029104601_MAR21.xlsx</td>
              <td className="px-3 py-4 text-left"><Badge color="red">Error al capturar</Badge></td>
              <td className="px-3 py-4 text-left">No se pudo capturar el archivo.</td>
              <td className="px-3 py-4 text-left"></td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-4 text-left text-blue-400">392029104601_FEB20.pdf</td>
              <td className="px-3 py-4 text-left"><Badge color="yellow">Capturado parcialmente</Badge></td>
              <td className="px-3 py-4 text-left">Error A2.6 No se encontró el consumo kwh Max para la tarifa GDLSX en el recibo.</td>
              <td className="px-3 py-4 text-left">392029104601</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-4 text-left text-blue-400">392029104601_FEB20.pdf</td>
              <td className="px-3 py-4 text-left"><Badge color="yellow">Capturado parcialmente</Badge></td>
              <td className="px-3 py-4 text-left">Error A2.6 No se encontró el consumo kwh Max para la tarifa GDLSX en el recibo.</td>
              <td className="px-3 py-4 text-left">392029104601</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-4 text-left text-blue-400">392029104601_FEB20.pdf</td>
              <td className="px-3 py-4 text-left"><Badge color="yellow">Capturado parcialmente</Badge></td>
              <td className="px-3 py-4 text-left">Error A2.6 No se encontró el consumo kwh Max para la tarifa GDLSX en el recibo.</td>
              <td className="px-3 py-4 text-left">392029104601</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-4 text-left text-blue-400">392029104601_FEB20.pdf</td>
              <td className="px-3 py-4 text-left"><Badge color="yellow">Capturado parcialmente</Badge></td>
              <td className="px-3 py-4 text-left">Error A2.6 No se encontró el consumo kwh Max para la tarifa GDLSX en el recibo.</td>
              <td className="px-3 py-4 text-left">392029104601</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-4 text-left text-blue-400">392029104601_FEB20.pdf</td>
              <td className="px-3 py-4 text-left"><Badge color="yellow">Capturado parcialmente</Badge></td>
              <td className="px-3 py-4 text-left">Error A2.6 No se encontró el consumo kwh Max para la tarifa GDLSX en el recibo.</td>
              <td className="px-3 py-4 text-left">392029104601</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-3 py-4 text-left text-blue-400">392029104601_FEB20.pdf</td>
              <td className="px-3 py-4 text-left"><Badge color="yellow">Capturado parcialmente</Badge></td>
              <td className="px-3 py-4 text-left">Error A2.6 No se encontró el consumo kwh Max para la tarifa GDLSX en el recibo.</td>
              <td className="px-3 py-4 text-left">392029104601</td>
            </tr>
          </tbody>
        </table>
      </Card>

      <div className="mt-4">
        <Badge color="green" className="!mr-2">10 capturados</Badge>
        <Badge color="yellow" className="!mr-2">25 capturados parcialmente</Badge>
        <Badge color="red">2 no capturados</Badge>
      </div>
    </>
  );
}

export default CaptureResults;