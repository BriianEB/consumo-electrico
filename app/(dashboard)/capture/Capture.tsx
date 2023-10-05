'use client';

import { useState } from 'react';

import CaptureForm from './CaptureForm';
import CaptureResults from './CaptureResults';
import UploadProgress from './UploadProgress';

function Capture() {
  const [filesCaptured, setFilesCaptured] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  function uploadedHandler() {
    setFilesCaptured(true);
    setUploading(false);
  }

  function filesSelectedHandler() {
    setUploading(true);
  }
  
  function getContent() {
    if (uploading) {
      console.log('uploading');
      return <UploadProgress onUploaded={uploadedHandler} />
    }

    if (filesCaptured) {
      console.log('results');
      return <CaptureResults />
    }

    return <CaptureForm onFilesSelected={filesSelectedHandler} />
  }

  return getContent();
}

export default Capture;