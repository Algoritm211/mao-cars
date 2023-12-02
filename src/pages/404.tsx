import React from 'react';
import { GetStaticPropsContext } from 'next';

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
