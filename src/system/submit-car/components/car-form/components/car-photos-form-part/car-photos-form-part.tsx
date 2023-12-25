import React from 'react';
import { useFormContext } from 'react-hook-form';

import { FormBlockWrapper, FormErrors } from '@/shared/components/form';
import { FileInputArea } from '@/shared/components/form/file-input-area/file-input-area';

export const CarPhotosFormPart = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const carPhotos: FileList = watch('photos');

  const handlePhotoDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer?.files;

    if (droppedFiles) {
      setValue('photos', droppedFiles);
      clearErrors('photos');
    }
  };

  return (
    <FormBlockWrapper title="Photos">
      <p className="my-2">
        Please upload at least 6 photos of the <b>exterior</b> and <b>interior</b> of the car.
      </p>

      <div>
        <FileInputArea
          multiple
          id="photos"
          areaTitle="Drop files to Attach, or click to browse"
          handleFileDrop={handlePhotoDrop}
          register={register}
          registerOptions={{ required: true }}
          accept="image/png, image/jpeg"
        />
      </div>

      {carPhotos?.length > 0 && (
        <div className="my-2 flex gap-2 flex-wrap justify-center">
          {Array.from(carPhotos).map((elem, index) => {
            return (
              <img
                key={index}
                src={URL.createObjectURL(elem)}
                alt={elem.name}
                className="w-36 aspect-video rounded-xl object-contain"
              />
            );
          })}
        </div>
      )}

      <FormErrors fieldId="photos" errors={errors} />
    </FormBlockWrapper>
  );
};
