import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  END_YEAR,
  END_YEARS,
  START_YEAR,
  START_YEARS,
  TRANSMISSION_FILTER_TYPES,
} from '@/core/constants';
import { BodyType, TransmissionType } from '@/core/interfaces';

import { AUCTION_SORT, BODY_TYPES } from './constants/constants';
import { AuctionsFilterInputs } from './models/auctions-filter';

interface Props {
  setFilter: (filter: AuctionsFilterInputs) => void;
  initialFilterValues: AuctionsFilterInputs;
}

export const AuctionsFilter: React.FC<Props> = ({ setFilter, initialFilterValues }) => {
  const router = useRouter();
  const t = useTranslations('Main_Page.filter');
  const { register, watch, handleSubmit, getValues } = useForm<AuctionsFilterInputs>({
    values: initialFilterValues,
  });

  const onSubmit = useCallback(
    (data: AuctionsFilterInputs) => {
      setFilter(data);
      const newPath = `?${new URLSearchParams(data as Record<string, string>).toString()}`;
      void router.push(newPath, newPath, { shallow: true });
    },
    [router, setFilter]
  );

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)());
    return () => subscription.unsubscribe();
  }, [handleSubmit, onSubmit, watch]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-4 mx-2 md:mx-0 flex gap-2 flex-col
        justify-around flex-wrap justify-items-end md:flex-row"
    >
      <div
        className="flex flex-wrap md:flex-nowrap gap-2
        justify-center w-full lg:w-1/2"
      >
        <div className="dropdown dropdown-bottom w-36 sm:w-full sm:flex-1">
          <label tabIndex={0} className="select select-bordered flex place-items-center">
            {t('years.year')}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72"
          >
            <li className="flex flex-row justify-center place-items-center">
              <select {...register('startYear')} className="select select-bordered w-1/3 max-w-xs">
                <option value={START_YEAR} hidden>
                  {t('years.startYear')}
                </option>
                {START_YEARS.map((elem) => {
                  return (
                    <option key={elem} value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none">{t('years.to')}</div>
              <select {...register('endYear')} className="select select-bordered w-1/3 max-w-xs">
                <option value={END_YEAR} hidden>
                  {t('years.endYear')}
                </option>
                {END_YEARS.map((elem) => {
                  return (
                    <option key={elem} value={elem}>
                      {elem}
                    </option>
                  );
                })}
              </select>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-fit">
          <select
            {...register('transmission')}
            className="select select-bordered w-full lg:w-xs inline-block"
          >
            <option value={TransmissionType.All} hidden>
              {t('transmission.transmission')}
            </option>
            {TRANSMISSION_FILTER_TYPES.map((elem) => {
              return (
                <option key={elem.key} value={elem.key}>
                  {t(elem.label)}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex-1 min-w-fit">
          <select
            {...register('bodyStyle')}
            className="select select-bordered w-full lg:w-xs inline-block"
          >
            <option value={BodyType.All} hidden>
              {t('body_style.body_style')}
            </option>
            {BODY_TYPES.map((elem) => {
              return (
                <option key={elem.key} value={elem.key}>
                  {t(elem.label)}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex justify-center place-items-center">
        <div className="tabs">
          {AUCTION_SORT.map((elem) => {
            return (
              <React.Fragment key={elem.key}>
                <input
                  {...register('sort')}
                  value={elem.key}
                  type="radio"
                  id={`field-${elem.key}`}
                  className={`hidden`}
                />
                <label
                  htmlFor={`field-${elem.key}`}
                  className={clsx('tab px-3 md:px-12 lg:px-[var(--tab-padding)]', {
                    'tab-active': getValues('sort') === elem.key,
                  })}
                >
                  {t(elem.label)}
                </label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </form>
  );
};
