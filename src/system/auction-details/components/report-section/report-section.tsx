import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import React from 'react';

import { reportSections } from '@/system/auction-details/components/report-section/models/report-sections';

import { Icon } from '@/shared/components';

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
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="text-center">VIN +</th>
              <th className="text-center">VIN Max</th>
            </tr>
          </thead>
          <tbody>
            {reportSections.map((reportElem) => (
              <tr key={reportElem.labelKey}>
                <th>{t(reportElem.labelKey)}</th>
                <td className="text-center">{getIcon(reportElem.isAvailablePlus)}</td>
                <td className="text-center">{getIcon(reportElem.isAvailableMax)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="divider px-1">Check your car</div>
    </React.Fragment>
  );
};
