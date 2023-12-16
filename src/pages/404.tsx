import { GetStaticPropsContext } from 'next';
import React from 'react';

const PageNotFound = () => {
  return <div>This page was not found</div>;
};

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}

export default PageNotFound;
