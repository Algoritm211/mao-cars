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

import {
  GetAuctionsParams,
  GetAuctionsTransmission,
  GetAuctionsBodyStyle,
} from '@/maocars-client/schemas';

import { Select } from '@/shared/components/form';

import { AUCTION_SORT, BODY_TYPES } from './constants/constants';

interface Props {
  setFilter: (filter: GetAuctionsParams) => void;
  initialFilterValues: GetAuctionsParams;
}

export const AuctionsFilter: React.FC<Props> = ({ setFilter, initialFilterValues }) => {
  const router = useRouter();
  const t = useTranslations('Main_Page.filter');
  const { register, watch, handleSubmit, getValues } = useForm<GetAuctionsParams>({
    values: initialFilterValues,
  });

  const onSubmit = useCallback(
    (data: GetAuctionsParams) => {
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

  const translatedTransmissionOptions = TRANSMISSION_FILTER_TYPES.map((option) => ({
    ...option,
    label: t(`transmission.${option.label}`),
  }));

  const translatedBodyTypeOptions = BODY_TYPES.map((option) => ({
    ...option,
    label: t(`body_style.${option.label}`),
  }));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ gridTemplateRows: 'min-content' }}
      className="mb-4 mx-2 md:mx-0 flex gap-2 flex-col
        justify-around flex-wrap justify-items-end md:flex-row"
    >
      <div
        className="flex flex-wrap md:flex-nowrap gap-2
        justify-center w-full lg:w-1/2"
      >
        <div className="dropdown dropdown-bottom w-36 sm:w-full sm:flex-1">
          <label tabIndex={0} className="select select-bordered flex place-items-center">
            {t('years.year_title')}
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
          <Select
            isLabelHidden
            id="transmission"
            className="w-full lg:w-xs"
            label={t('transmission.select_title')}
            defaultOptionTitle={t('transmission.select_title')}
            defaultOptionValue={GetAuctionsTransmission.all}
            options={translatedTransmissionOptions}
            register={register}
          />
        </div>

        <div className="flex-1 min-w-fit">
          <Select
            isLabelHidden
            id="bodyStyle"
            className="w-full lg:w-xs"
            label={t('body_style.body_style_title')}
            defaultOptionTitle={t('body_style.body_style_title')}
            defaultOptionValue={GetAuctionsBodyStyle.all}
            options={translatedBodyTypeOptions}
            register={register}
          />
        </div>
      </div>
      <div
        className="grid grid-cols-2 h-16
        sm:grid-cols-none sm:grid-flow-col sm:items-center
        sm:h-8 lg:h-12"
      >
        {AUCTION_SORT.map((elem) => {
          return (
            <React.Fragment key={elem.key}>
              <input
                {...register('sort')}
                value={elem.key}
                type="radio"
                id={elem.key}
                className="hidden"
              />
              <label
                htmlFor={elem.key}
                className={clsx(`flex justify-center items-center 
                   text-sm text-neutral cursor-pointer px-3 md:px-12 lg:px-3`, {
                  'font-bold': getValues('sort') === elem.key,
                })}
              >
                {t(`auction_sort.${elem.label}`)}
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </form>
  );
};
