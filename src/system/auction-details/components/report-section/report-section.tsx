import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import React from 'react';

import { reportSections } from '@/system/auction-details/components/report-section/models/report-sections';

import { button, Icon } from '@/shared/components';
import { currencyFormatter } from '@/shared/utils';

const getIcon = (isPositive: boolean) => {
  return (
    <Icon
      name={isPositive ? 'check-circle' : 'x-circle'}
      className={clsx('inline w-7 h-7', {
        'text-green-600': isPositive,
        'text-red-600': !isPositive,
      })}
    />
  );
};

export const ReportSection = () => {
  const t = useTranslations('Auction_Page.auction_details.report');

  return (
    <React.Fragment>
      <div className="divider px-1">Special offer</div>
      <div className="overflow-x-auto text-center">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="text-center text-lg">VIN +</th>
              <th className="text-center text-lg">VIN Max</th>
            </tr>
          </thead>
          <tbody>
            {reportSections.map((reportElem) => (
              <tr key={reportElem.labelKey}>
                <th className="text-lg">{t(reportElem.labelKey)}</th>
                <td className="text-center">{getIcon(reportElem.isAvailablePlus)}</td>
                <td className="text-center">{getIcon(reportElem.isAvailableMax)}</td>
              </tr>
            ))}
            <tr className="text-green-600">
              <th className="text-lg">{t('price')}</th>
              <td className="text-center text-xl">{currencyFormatter(20)}</td>
              <td className="text-center text-xl">{currencyFormatter(40)}</td>
            </tr>
            <tr className="hidden md:table-row">
              <th></th>
              <td className="text-center">
                <button className={button()}>{t('buy_vin_plus')}</button>
              </td>
              <td className="text-center">
                <button className={button()}>{t('buy_vin_max')}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-2 my-2 md:hidden">
        <button className={button({ className: 'flex-grow' })}>{t('buy_vin_plus')}</button>
        <button className={button({ className: 'flex-grow' })}>{t('buy_vin_max')}</button>
      </div>
      <div className="divider px-1">Check your car</div>
    </React.Fragment>
  );
};
