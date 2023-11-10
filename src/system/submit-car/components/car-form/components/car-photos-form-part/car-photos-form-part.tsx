import React, {useState} from 'react';
import {useFormContext} from "react-hook-form";
import {Icon} from "@/shared/components/icon/icon";
import {clsx} from "clsx";
import {FormBlockWrapper, FormErrors} from "@/shared/components/form";


export const CarPhotosFormPart = () => {
  const {
    register,
    watch,
    setValue,
    formState: {errors}
  } = useFormContext();
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const carPhotos = watch('photos') as FileList;

  const handlePhotoDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();

    const droppedFiles = event.dataTransfer?.files;

    if (droppedFiles) {
      setValue('photos', droppedFiles);
    }
  };

  return (
    <FormBlockWrapper title='Photos'>
      <p className='my-2'>
        Please upload at least 6 photos of the <b>exterior</b> and <b>interior</b> of the car.
      </p>

      <div>
        <label
          htmlFor='car_photos'
          onDrop={handlePhotoDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDraggingOver(true);
          }}
          onDragLeave={() => setIsDraggingOver(false)}
          className={clsx(`flex justify-center w-full h-32 px-4
          transition bg-white border-2 border-gray-300 border-dashed
          rounded-md appearance-none cursor-pointer
          hover:border-gray-400 focus:outline-none`,
            {'border-gray-400': isDraggingOver}
          )}
        >
        <span className="flex items-center space-x-2">
            <Icon name='upload-file' className='w-6 h-6 text-gray-600'/>
            <span className="font-medium text-gray-600">
                Drop files to Attach, or click to browse
            </span>
        </span>
          <input
            id='car_photos'
            type="file"
            className="hidden"
            multiple={true}
            accept="image/png, image/jpeg"
            {...register('photos', {required: true})}
          />
        </label>
      </div>

      {carPhotos?.length > 0 && (
        <div className='my-2 flex gap-2'>
          {Array.from(carPhotos).map((elem, index) => {
            return (
              <img
                key={index}
                src={URL.createObjectURL(elem)}
                alt={elem.name}
                className='w-36 aspect-video rounded'
              />
            )
          })}
        </div>
      )}

      <FormErrors fieldId='photos' errors={errors}/>
    </FormBlockWrapper>
  );
};
