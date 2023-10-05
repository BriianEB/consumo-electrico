import { Metadata } from 'next';

import Card from '@/_shared/components/Card';
import ContentLayout from '@/(dashboard)/_components/layouts/ContentLayout';
import ListView from '@/(dashboard)/_components/list-view/ListView';

export const metadata: Metadata = {
  title: 'Clientes'
};


function Clients() {
  return (
    <ContentLayout title="Clientes" breadcrumbs={['Panel', 'Clientes']}>
      <Card>
        <ListView />
      </Card>
    </ContentLayout>
  );
}

export default Clients;