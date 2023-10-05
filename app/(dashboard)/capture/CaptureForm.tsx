import UploadFilesIllustration from '@/_shared/illustrations/UploadFilesIllustration';

type CaptureFormProps = {
  onFilesSelected: () => void;
};

function CaptureForm({ onFilesSelected }: CaptureFormProps) {

  function handleChange() {
    onFilesSelected();
  }

  return (
    <>
      <div className="relative flex justify-center">
        <input
          type="file"
          className={`
            w-80 h-80 bg-blue-400/[.16] text-transparent cursor-pointer rounded-full z-30
            file:bg-transparent file:text-transparent file:border-none
          `}
          onChange={handleChange}
          multiple
        />
        <UploadFilesIllustration className="absolute top-1/2 -translate-y-1/2 z-10" />
      </div>

      <div className="text-center">
        <div className="mt-8 text-xl font-bold">
          Carga archivos para comenzar
        </div>

        <div className="mt-4 text-base text-gray-500">
          Arrastra y suelta los archivos o selecciónalos desde tu dispositivo
        </div>
      </div>
    </>
  );
}

export default CaptureForm;