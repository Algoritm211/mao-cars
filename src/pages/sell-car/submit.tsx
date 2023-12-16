import { GetStaticPropsContext } from 'next';
import React from 'react';

import { SubmitCar } from '@/system/submit-car/submit-car';

const Submit = () => {
  return (
    <div>
      <SubmitCar />
    </div>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`)).default,
    },
  };
}

export default Submit;
