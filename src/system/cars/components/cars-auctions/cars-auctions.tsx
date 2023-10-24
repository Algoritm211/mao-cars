import React from 'react';
import CarCard from "@/shared/components/car-card/car-card";

export const CarsAuctions = () => {
  return (
    <div className='my-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
};
