import { clsx } from 'clsx';
import React from 'react';

import { Icon } from '@/shared/components';

export const WhyMaoCars = () => {
  return (
    <div>
      <h3 className="text-3xl text-center font-bold mb-3">Why Mao Cars?</h3>
      <div className="flex flex-col gap-4 justify-center">
        <div className="stats stats-vertical md:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-figure text-purple-600">
              <Icon name="check-circle" className="w-8 h-8" />
            </div>
            <div className="stat-title">Auctions completed</div>
            <div className="stat-value">18 000+</div>
            <div className="stat-desc">15% more than last year</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-purple-600">
              <Icon name="receipt-percent" className="w-8 h-8" />
            </div>
            <div className="stat-title">Sell-through rate</div>
            <div className="stat-value">83+%</div>
            <div className="stat-desc">14% more than last year</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-purple-600">
              <Icon name="currency-dollar" className="w-8 h-8" />
            </div>
            <div className="stat-title">Value of cars sold</div>
            <div className="stat-value">$415M+</div>
            <div className="stat-desc">8% more than last year</div>
          </div>
        </div>
        <div className="divider">And</div>
        <div className="stats stats-vertical md:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-figure text-purple-600">
              <Icon name="squares-plus" className="w-8 h-8" />
            </div>
            <div className="stat-title">Registered members</div>
            <div className="stat-value">510k+</div>
            <div className="stat-desc">34% more than last year</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-purple-600">
              <Icon name="user" className="w-8 h-8" />
            </div>
            <div className="stat-title">Sellers recommend</div>
            <div className="stat-value">9/10</div>
            <div className="stat-desc">We are proud of it</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-purple-600">
              <Icon name="arrow-ripple" className="w-8 h-8" />
            </div>
            <div className="stat-title">Audience Engaged</div>
            <div className="stat-value">995k+</div>
            <div className="stat-desc">7.5% more than last year</div>
          </div>
        </div>
      </div>
    </div>
  );
};
