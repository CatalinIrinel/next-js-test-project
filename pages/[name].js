import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const DynamicRoute = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.name}</title>
      </Head>
      <h1>Page {router.query.name}</h1>
    </div>
  );
};

export default DynamicRoute;
