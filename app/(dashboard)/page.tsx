import { Metadata } from 'next';

import Dashboard from './Dashboard';

export const metadata: Metadata = {
  title: 'Panel | Consumo Eléctrico'
};

function DashboardPage() {
  return (
    <Dashboard />
  );
}

export default DashboardPage;