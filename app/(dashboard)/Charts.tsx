'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import Card from '@/_shared/components/Card';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false, loading: () => <p>cargando</p> });

function Charts() {
  return (
    <div className="flex">
      <Card className="!mr-6">
        <Chart
          options={{
            chart: {
              id: 'basic-chart'
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            },
          }}
          series={[
            {
              name: 'series-1',
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]}
          type="line"
          width="970"
          height="400"
        />
      </Card>

      <Card>
        <Chart
          options={{
            chart: {
              id: 'donut-chart'
            }
          }}
          series={[44, 55, 41, 17, 15]}
          labels={['A', 'B', 'C', 'D', 'E']}
          type="donut"
          width="525"
        />
      </Card>
    </div>
  );
}

export default Charts;