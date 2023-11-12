import React, {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {BodyType, TransmissionType} from "@/core/interfaces";
import {
  AUCTION_SORT,
  BODY_TYPES,
} from "@/system/cars/components/auctions-filter/constants/constants";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";
import {clsx} from "clsx";
import {END_YEAR, END_YEARS, START_YEAR, START_YEARS, TRANSMISSION_FILTER_TYPES} from "@/core/constants";
import {useAuctions} from "@/data-access";
import {AuctionsFilterInputs} from "@/system/cars/components/auctions-filter/models/auctions-filter";

export const AuctionsFilter = () => {
  const router = useRouter()
  const params = useSearchParams();
  const [filter, setFilter] = useState<AuctionsFilterInputs>({});
  const { isFetching} = useAuctions(filter)

  const valuesFromParams = {
    startYear: params.get('startYear') || undefined,
    endYear: params.get('endYear') || undefined,
    bodyStyle: params.get('bodyStyle') as BodyType || undefined,
    transmission: params.get('transmission') as TransmissionType || undefined,
    sort: params.get('sort') || undefined,
  }
  const {
    register,
    watch,
    handleSubmit,
    getValues
  } = useForm<AuctionsFilterInputs>({
    values: valuesFromParams,
  })

  const onSubmit = useCallback((data: AuctionsFilterInputs) => {
    setFilter(data)
    void router.push(`?${new URLSearchParams(data as Record<string, string>).toString()}`)
  }, [router])

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)())
    return () => subscription.unsubscribe();
  }, [handleSubmit, onSubmit, watch]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(`mb-4 flex gap-2 flex-col justify-around 
        justify-items-end md:flex-row`,
        {'pointer-events-none opacity-50': isFetching}
      )}>
      <div className='flex gap-2 justify-center'>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="select select-bordered flex place-items-center">Year</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
            <li className="flex flex-row justify-center place-items-center">
              <select {...register('startYear')} className="select select-bordered w-1/3 max-w-xs">
                <option value={START_YEAR} hidden>Start</option>
                {START_YEARS.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
              <div className='pointer-events-none'>TO</div>
              <select {...register('endYear')} className="select select-bordered w-1/3 max-w-xs">
                <option value={END_YEAR} hidden>End</option>
                {END_YEARS.map(elem => {
                  return <option key={elem} value={elem}>{elem}</option>
                })}
              </select>
            </li>
          </ul>
        </div>

        <div>
          <select {...register('transmission')} className="select select-bordered w-xs inline-block">
            <option value={TransmissionType.All} hidden>Transmission</option>
            {TRANSMISSION_FILTER_TYPES.map(elem => {
              return <option key={elem} value={elem}>{elem}</option>
            })}
          </select>
        </div>

        <div>
          <select {...register('bodyStyle',)} className="select select-bordered w-xs inline-block">
            <option value={BodyType.All} hidden>Body style</option>
            {BODY_TYPES.map(elem => {
              return <option key={elem} value={elem}>{elem}</option>
            })}
          </select>
        </div>
      </div>
      <div className='flex justify-center place-items-center'>
        <div className="tabs">
          {AUCTION_SORT.map(elem => {
            return (
              <React.Fragment key={elem}>
                <input {...register('sort')} value={elem} type="radio" id={`field-${elem}`} className={`hidden`}/>
                <label
                  htmlFor={`field-${elem}`}
                  className={clsx('tab', {'tab-active': getValues('sort') === elem})}>
                  {elem}
                </label>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </form>
  );
};
