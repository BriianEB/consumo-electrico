import { Metadata } from 'next';

import ContentLayout from '@/(dashboard)/_components/layouts/ContentLayout';

export const metadata: Metadata = {
  title: 'Grupos'
};


function Groups() {
  return (
    <ContentLayout title="Grupos" breadcrumbs={[]}>
      {''}
    </ContentLayout>
  );
}

export default Groups;