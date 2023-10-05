'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Badge from '@/_shared/components/Badge';
import Card from '@/_shared/components/Card';
import Charts from './Charts';
import ContentLayout from '@/(dashboard)/_components/layouts/ContentLayout';
import DashboardCard from './_components/DashboardCard';
import Spinner from '@/_shared/components/Spinner';

import { BuildingOffice2Icon, DocumentDuplicateIcon, HomeModernIcon, UsersIcon, UserMinusIcon } from '@heroicons/react/20/solid';

function Dashboard() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  return (
    <ContentLayout title="Panel" breadcrumbs={['Panel']}>
      { loading && (
        <div className="absolute w-full h-full -ml-5 bg-gray-200 z-[2000] flex justify-center pt-10">
          <Spinner className="!text-blue-400 !w-10 !h-10" />
        </div>
      )}

      <div className="flex justify-between w-full mb-6">
        <DashboardCard
          Icon={UsersIcon}
          title="Clientes"
          content="7,640"
          subContent={(
            <>
              <Badge color="green">+12%</Badge>
              <span className="ml-3">desde el último mes</span>
            </>
          )}
          className="!mr-6 !grow"
        />

        <DashboardCard
          Icon={HomeModernIcon}
          title="Parques"
          content="5,276"
          subContent={(
            <>
              <Badge color="green">+26%</Badge>
              <span className="ml-3">desde el último mes</span>
            </>
          )}
          className="!mr-6 !grow"
        />

        <DashboardCard
          Icon={BuildingOffice2Icon}
          title="Grupos"
          content="3,847"
          subContent={(
            <>
              <Badge color="green">+16%</Badge>
              <span className="ml-3">desde el último mes</span>
            </>
          )}
          className="!mr-6 !grow"
        />

        <DashboardCard
          Icon={UserMinusIcon}
          title="Clientes sin recibo"
          content="32"
          subContent={(
            <>
              <Badge color="red">-7%</Badge>
              <span className="ml-3">desde el último mes</span>
            </>
          )}
          className="!grow"
        />
      </div>

      <Charts />

      <div className="flex mt-6">
        <Card className="!mr-6 !grow-[2]">
          <div className="mb-6">
            <h5 className="text-base font-bold">Últimos clientes capturados</h5>
          </div>

          <table className="table-auto bg-white w-full border-collapse rounded-t-lg overflow-hidden">
            <thead>
              <tr className="rounded-lg">
                <th className="bg-gray-250 px-3 py-4 text-left">Nombre</th>
                <th className="bg-gray-250 px-3 py-4 text-left">No. Servicio</th>
                <th className="bg-gray-250 px-3 py-4 text-left">Recibos</th>
                <th className="bg-gray-250 px-3 py-4 text-left">Medidor</th>
                <th className="bg-gray-250 px-3 py-4 text-left">Grupo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-4 text-left">Rockstar Games</td>
                <td className="px-3 py-4 text-left">322029104601</td>
                <td className="px-3 py-4 text-left">32</td>
                <td className="px-3 py-4 text-left">326DZ1</td>
                <td className="px-3 py-4 text-left">3</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-4 text-left">Cisco</td>
                <td className="px-3 py-4 text-left">312029104601</td>
                <td className="px-3 py-4 text-left">26</td>
                <td className="px-3 py-4 text-left">316DZ1</td>
                <td className="px-3 py-4 text-left">6</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-4 text-left">O'Reilly</td>
                <td className="px-3 py-4 text-left">312029104601</td>
                <td className="px-3 py-4 text-left">27</td>
                <td className="px-3 py-4 text-left">346DZ1</td>
                <td className="px-3 py-4 text-left">2</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-4 text-left">Capcom</td>
                <td className="px-3 py-4 text-left">342029104601</td>
                <td className="px-3 py-4 text-left">22</td>
                <td className="px-3 py-4 text-left">376DZ1</td>
                <td className="px-3 py-4 text-left">9</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-4 text-left">Samsung</td>
                <td className="px-3 py-4 text-left">372029104601</td>
                <td className="px-3 py-4 text-left">21</td>
                <td className="px-3 py-4 text-left">346DZ4</td>
                <td className="px-3 py-4 text-left">4</td>
              </tr>
            </tbody>
          </table>
        </Card>

        <Card className="!grow">
          <div className="mb-6">
            <h5 className="text-base font-bold">Clientes más leales</h5>
          </div>

          <div>
            <div className="flex mb-7">
              <Image
                src="/clients/guerrilla.png"
                alt="Guerrilla Games"
                width="40"
                height="40"
              />

              <div className="flex justify-between items-center w-full ml-6">
                <div>
                  <h6 className="font-bold">Guerrilla Games</h6>

                  <div className="flex items-center text-gray-600 mt-1 text-[13px]">
                    Desde Marzo del 2021
                  </div>
                </div>

                <div>
                  <div className="flex justify-center items-center p-2 bg-orange-500/10 text-orange-400 rounded-lg">
                    <DocumentDuplicateIcon className="w-6 h-6" />
                    <span className="ml-1 font-bold">528</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mb-7">
              <Image
                src="/clients/sony.png"
                alt="Sony"
                width="40"
                height="40"
              />

              <div className="flex justify-between items-center w-full ml-6">
                <div>
                  <h6 className="font-bold">Sony</h6>

                  <div className="flex items-center text-gray-600 mt-1 text-[13px]">
                    Desde Septiembre del 2021
                  </div>
                </div>

                <div>
                  <div className="flex justify-center items-center p-2 bg-violet-500/10 text-violet-500 rounded-lg">
                    <DocumentDuplicateIcon className="w-6 h-6" />
                    <span className="ml-1 font-bold">429</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mb-7">
              <Image
                src="/clients/panasonic.png"
                alt="Panasonic"
                width="40"
                height="40"
              />

              <div className="flex justify-between items-center w-full ml-6">
                <div>
                  <h6 className="font-bold">Panasonic</h6>

                  <div className="flex items-center text-gray-600 mt-1 text-[13px]">
                    Desde Abril del 2021
                  </div>
                </div>

                <div>
                  <div className="flex justify-center items-center p-2 bg-sky-500/10 text-sky-500 rounded-lg">
                    <DocumentDuplicateIcon className="w-6 h-6" />
                    <span className="ml-1 font-bold">385</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mb-7">
              <Image
                src="/clients/toyota.png"
                alt="Toyota"
                width="40"
                height="40"
              />

              <div className="flex justify-between items-center w-full ml-6">
                <div>
                  <h6 className="font-bold">Toyota</h6>

                  <div className="flex items-center text-gray-600 mt-1 text-[13px]">
                    Desde Febrero del 2022
                  </div>
                </div>

                <div>
                  <div className="flex justify-center items-center p-2 bg-green-500/10 text-green-500 rounded-lg">
                    <DocumentDuplicateIcon className="w-6 h-6" />
                    <span className="ml-1 font-bold">256</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <Image
                src="/clients/atnt.png"
                alt="AT&T"
                width="40"
                height="40"
              />

              <div className="flex justify-between items-center w-full ml-6">
                <div>
                  <h6 className="font-bold">AT&T</h6>

                  <div className="flex items-center text-gray-600 mt-1 text-[13px]">
                    Desde Julio del 2022
                  </div>
                </div>

                <div>
                  <div className="flex justify-center items-center p-2 bg-green-500/10 text-green-500 rounded-lg">
                    <DocumentDuplicateIcon className="w-6 h-6" />
                    <span className="ml-1 font-bold">237</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </Card>
      </div>
    </ContentLayout>
  );
}

export default Dashboard;