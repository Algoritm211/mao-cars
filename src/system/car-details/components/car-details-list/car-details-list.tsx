import React from 'react';
import {clsx} from "clsx";

const MOCK_CAR = {
  "Make": "Rolls-Royce",
  "Model": "Phantom",
  "Mileage": 34000,
  "VIN": "SCA1S68588UX08753",
  "Title Status": "Clean (CA)",
  "Location": "Cerritos, CA 90703",
  "Seller": "centinela1",
  "Engine": "6.75L V12",
  "Drivetrain": "Rear-wheel drive",
  "Transmission": "Automatic (6-Speed)",
  "Body Style": "Sedan",
  "Exterior Color": "Black",
  "Interior Color": "Tan",
  "Seller Type": "Private Party"
}


export const CarDetailsList = () => {
  return (
    <div className='py-4 grid grid-cols-1 md:grid-cols-2'>
      <dl className='grid grid-cols-[33%_67%] border border-gray-200'>
        {Object.entries(MOCK_CAR).slice(0, 7).map(([key, value], index, arr) => {
          return (
            <React.Fragment key={index}>
              <dt
                className={clsx(`font-bold min-h-12
                bg-gray-100 text-center grid place-content-center
                border-gray-200`, {'border-b border-r': index !== arr.length - 1})}>
                {key}
              </dt>
              <dd
                className={clsx('flex items-center pl-4 border-gray-200', {'border-b': index !== arr.length - 1})}>{value}</dd>
            </React.Fragment>
          )
        })}
      </dl>
      <dl className='grid grid-cols-[33%_67%] border-r border-b md:border-t border-gray-200'>
        {Object.entries(MOCK_CAR).slice(7).map(([key, value], index, arr) => {
          return (
            <React.Fragment key={index}>
              <dt
                className={clsx(`font-bold min-h-12
                bg-gray-100 text-center grid place-content-center
                border-gray-200`, {'border-b border-r': index !== arr.length - 1})}>
                {key}
              </dt>
              <dd
                className={clsx('flex items-center pl-4 border-gray-200', {'border-b': index !== arr.length - 1})}>{value}</dd>
            </React.Fragment>
          )
        })}
      </dl>
    </div>
  );
};
