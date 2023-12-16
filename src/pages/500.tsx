import { GetStaticPropsContext } from 'next';
import React from 'react';

const ErrorPage = () => {
  return <div>Error was occurred</div>;
};

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}

export default ErrorPage;
