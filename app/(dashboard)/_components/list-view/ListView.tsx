'use client';

import Button from '@/_shared/components/Button';
import Checkbox from '@/_shared/components/Checkbox';
import MoreMenu from './MoreMenu';

import { ArrowDownTrayIcon, FunnelIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/20/solid';
import ArrowRightIcon from '@/_shared/icons/ArrowRightIcon';
import ArrowLeftIcon from '@/_shared/icons/ArrowLeftIcon';

function ListView() {
  return (
    <>
      <div className="pb-6 flex justify-between items-center">
        <Button color="blue" className="!flex !items-center">
          <PlusIcon className="w-6 h-6" />
          <span className="">Agregar Cliente</span>
        </Button>

        <div className="w-72">
          <div
            className={`
                  relative border-b border-neutral-400
                  after:block after:border-b-2 after:border-blue-400 after:scale-x-0 after:transition-transform
                  focus-within:after:scale-x-100
                `}
          >
            <MagnifyingGlassIcon className="absolute bottom-1.5 left-2 w-4 h-4 text-neutral-500" />

            <input
              type="text"
              id="findList"
              name="findList"
              className={`
                    relative bg-transparent w-full ml-9 py-0.5 placeholder:text-neutral-500
                    focus:outline-none
                  `}
              placeholder="Buscar..."
            />
          </div>

          <div className="flex mt-4 ml-2">
            <Button color="gray-light" className="!flex !items-center !mr-3 !px-2.5 !py-1 !text-[0.812rem]">
              <FunnelIcon className="w-3 h-3" />
              <span className="ml-1">Filtros</span>
            </Button>

            <Button color="gray-light" className="flex items-center !px-2.5 !py-1 !text-[0.812rem]">
              <ArrowDownTrayIcon className="w-4 h-4" />
              <span className="ml-1">Exportar</span>
            </Button>
          </div>
        </div>
      </div>

      <table className="table-auto bg-white w-full border-collapse rounded-t-lg overflow-hidden">
        <thead>
          <tr className="">
            <th className="bg-gray-250 px-3 py-4"><div className="flex justify-center w-30"><Checkbox name="allReg" color="blue" /></div></th>
            <th className="bg-gray-250 px-3 py-4 text-left">No. Servicio</th>
            <th className="bg-gray-250 px-3 py-4 text-left">Nombre</th>
            <th className="bg-gray-250 px-3 py-4 text-left">No. de Recibos</th>
            <th className="bg-gray-250 px-3 py-4 text-left">Medidor</th>
            <th className="bg-gray-250 px-3 py-4 text-left">RMU</th>
            <th className="bg-gray-250 px-3 py-4 text-left">Grupo</th>
            <th className="bg-gray-250 px-3 py-4 text-left">Tarifa</th>
            <th className="bg-gray-250 px-5 py-4 "></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-3 py-4 "><div className="flex justify-center"><Checkbox name="allReg" color="blue" /></div></td>
            <td className="px-3 py-4 text-left">392029104601</td>
            <td className="px-3 py-4 text-left">Netflix</td>
            <td className="px-3 py-4 text-left">35</td>
            <td className="px-3 py-4 text-left">346DZ1</td>
            <td className="px-3 py-4 text-left">12462 01-03-06</td>
            <td className="px-3 py-4 text-left">6</td>
            <td className="px-3 py-4 text-left">GDLSX</td>
            <td className=""><div className="flex justify-center"><MoreMenu /></div></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-3 py-4 "><div className="flex justify-center"><Checkbox name="allReg" color="blue" /></div></td>
            <td className="px-3 py-4 text-left">492029104601</td>
            <td className="px-3 py-4 text-left">Microsoft</td>
            <td className="px-3 py-4 text-left">32</td>
            <td className="px-3 py-4 text-left">326DX1</td>
            <td className="px-3 py-4 text-left">12262 01-02-06</td>
            <td className="px-3 py-4 text-left">2</td>
            <td className="px-3 py-4 text-left">GDLSX</td>
            <td className=""><div className="flex justify-center"><MoreMenu /></div></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-3 py-4 "><div className="flex justify-center"><Checkbox name="allReg" color="blue" /></div></td>
            <td className="px-3 py-4 text-left">792029104601</td>
            <td className="px-3 py-4 text-left">Google</td>
            <td className="px-3 py-4 text-left">23</td>
            <td className="px-3 py-4 text-left">316DX1</td>
            <td className="px-3 py-4 text-left">13462 01-01-06</td>
            <td className="px-3 py-4 text-left">3</td>
            <td className="px-3 py-4 text-left">GDLSX</td>
            <td className=""><div className="flex justify-center"><MoreMenu /></div></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-3 py-4 "><div className="flex justify-center"><Checkbox name="allReg" color="blue" /></div></td>
            <td className="px-3 py-4 text-left">192029104601</td>
            <td className="px-3 py-4 text-left">Intel</td>
            <td className="px-3 py-4 text-left">27</td>
            <td className="px-3 py-4 text-left">346DX4</td>
            <td className="px-3 py-4 text-left">11462 02-03-06</td>
            <td className="px-3 py-4 text-left">3</td>
            <td className="px-3 py-4 text-left">GDLSX</td>
            <td className=""><div className="flex justify-center"><MoreMenu /></div></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-3 py-4 "><div className="flex justify-center"><Checkbox name="allReg" color="blue" /></div></td>
            <td className="px-3 py-4 text-left">292029104604</td>
            <td className="px-3 py-4 text-left">Nvidia</td>
            <td className="px-3 py-4 text-left">26</td>
            <td className="px-3 py-4 text-left">146DX6</td>
            <td className="px-3 py-4 text-left">14462 01-03-07</td>
            <td className="px-3 py-4 text-left">3</td>
            <td className="px-3 py-4 text-left">GDLSX</td>
            <td className=""><div className="flex justify-center"><MoreMenu /></div></td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between mt-6">
        <div className="flex items-center">Mostrando de 1 a 5 de 15 resultados</div>

        <div>
          <ul className="flex items-center">
            <li className="mr-1">
              <button
                className={`
                  flex justify-center items-center w-8 h-8 rounded-full outline-none  transition-all linear duration-300
                  hover:bg-slate-400/20 hover:text-blue-400
                `}
              >
                <ArrowLeftIcon className="w-3 h-3" />
              </button>
            </li>
            <li className="mr-1">
              <button className="bg-blue-400 w-8 h-8 rounded-full text-white outline-none">1</button>
            </li>
            <li className="mr-1">
              <button
                className={`
                  w-8 h-8 rounded-full outline-none  transition-all linear duration-300
                  hover:bg-slate-400/20 hover:text-blue-400
                `}
              >
                2
              </button>
            </li>
            <li className="mr-1">
              <button
                className={`
                  w-8 h-8 rounded-full outline-none  transition-all linear duration-300
                  hover:bg-slate-400/20 hover:text-blue-400
                `}
              >
                3
              </button>
            </li>
            <li>
              <button
                className={`
                  flex justify-center items-center w-8 h-8 rounded-full outline-none  transition-all linear duration-300
                  hover:bg-slate-400/20 hover:text-blue-400
                `}
              >
                <ArrowRightIcon className="w-3 h-3" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListView;