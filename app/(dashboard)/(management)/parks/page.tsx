import { Metadata } from 'next';

import ContentLayout from '@/(dashboard)/_components/layouts/ContentLayout';

export const metadata: Metadata = {
  title: 'Parques'
};


function Parks() {
  return (
    <ContentLayout title="Parques" breadcrumbs={[]}>
      {''}
    </ContentLayout>
  );
}

export default Parks;