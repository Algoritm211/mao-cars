import { clsx } from 'clsx';
import React from 'react';

import { Icon } from '@/shared/components';

export const ReportSection = () => {
  const iconClassName = 'inline w-7 h-7';
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
            <tr>
              <th>Основные характеристики и данные о коплектации</th>
              <td className="text-center">
                <Icon name="check-circle" className={clsx(iconClassName, 'text-green-600')} />
              </td>
              <td className="text-center">
                <Icon name="check-circle" className={clsx(iconClassName, 'text-green-600')} />
              </td>
            </tr>
            <tr>
              <th>Проверка на скручивание пробега</th>
              <td className="text-center">
                <Icon name="check-circle" className={clsx(iconClassName, 'text-green-600')} />
              </td>
              <td className="text-center">
                <Icon name="check-circle" className={clsx(iconClassName, 'text-green-600')} />
              </td>
            </tr>
            <tr>
              <th>Наличие страхового полиса</th>
              <td className="text-center">
                <Icon name="x-circle" className={clsx(iconClassName, 'text-red-600')} />
              </td>
              <td className="text-center">
                <Icon name="check-circle" className={clsx(iconClassName, 'text-green-600')} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="divider px-1">Check your car</div>
    </React.Fragment>
  );
};
