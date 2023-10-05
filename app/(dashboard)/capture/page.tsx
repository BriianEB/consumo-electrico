import { Metadata } from 'next';

import ContentLayout from '@/(dashboard)/_components/layouts/ContentLayout';
import Capture from './Capture';

export const metadata: Metadata = {
  title: 'Captura'
};

function CapturePage() {
  return (
    <ContentLayout title="Captura" breadcrumbs={['Panel', 'Captura']}>
      <Capture />
    </ContentLayout>
  );
}

export default CapturePage;