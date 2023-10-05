import { Metadata } from 'next';

import ContentLayout from '@/(dashboard)/_components/layouts/ContentLayout';

export const metadata: Metadata = {
  title: 'Reportes'
};

function Reports() {
  return (
    <ContentLayout title="Reportes" breadcrumbs={[]}>
      {''}
    </ContentLayout>
  );
}

export default Reports;