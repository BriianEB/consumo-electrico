'use client';

import { useEffect, useState } from 'react';

import { DocumentTextIcon } from "@heroicons/react/20/solid";

import Spinner from '@/_shared/components/Spinner';

type UploadProgressProps = {
  onUploaded: () => void;
};

function UploadProgress({ onUploaded }: UploadProgressProps) {
  const [uploadCompleted, setUploadCompleted] = useState<boolean>(false);
  const [progressStatus, setProgressStatus] = useState<number>(0);

  useEffect(() => {
    const time = Math.floor(Math.random() * 1000) + 1;
    let timer = setTimeout(progress, time);setUploadCompleted
    
    function progress() {
      clearTimeout(timer);
      
      const progress = Math.floor(Math.random() * 10) + 1;      

      if (progressStatus === 100) {
        setUploadCompleted(true);
      } else {
        setProgressStatus((state) => {
          if (state + progress > 100) {
            return 100;
          } else {
            return state + progress;
          }
        });
      }
    }    

    return () => clearTimeout(timer);
  }, [progressStatus]);

  useEffect(() => {
    if (uploadCompleted) {
      onUploaded();
    }
  }, [uploadCompleted]);

  function randomDate(start: Date, end: Date) {
    const date = new Date(+start + Math.random() * (end - start));
    const day = String(date.getDay() + 1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  }
  
  return (
    <div className="relative flex justify-center pt-10">
      <div className="flex bg-blue-400/[.16] w-1/2 h-1/2 rounded p-6">
        <DocumentTextIcon className="w-20 h-20 text-blue-400" />

        <div className="flex flex-col justify-between w-full p-3 text-base">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span>
                {randomDate(new Date(2015, 1, 1), new Date(2022, 12, 31))}.pdf
              </span>
              <span className="bg-neutral-500 w-1 h-1 ml-3 mr-4 rounded-full"></span>
              <Spinner className="text-neutral-500 w-4 h-4" />
              <span className="text-neutral-500 -ml-1.5">Subiendo archivos...</span>
            </div>

            <div className="font-bold text-blue-400">{progressStatus}%</div>
          </div>

          <div className="bg-white w-full h-6 rounded overflow-hidden">
            <div
              className="bg-blue-400 h-full transition-[width] duration-300 ease-linear"
              style={{ width: `${progressStatus}%`}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadProgress;