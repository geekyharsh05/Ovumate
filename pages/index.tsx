import React from 'react';
import type { NextPage } from 'next';

import NoSSR from '../components/NoSSR';
import Layout from '../components/Layout';
import Calculator from '../components/Calculator';

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
            <div className="sm:text-center">
              <h2 className="text-4xl font-semibold leading -8 text-indigo-500">
                Ovumate
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Cycle, Your Control.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Use this calculator to pinpoint your most fertile days by
                identifying when you are likely ovulating. Menstrual periods can
                vary from person to person and month to month, so this tool can
                help you better understand your own cycle.
              </p>
            </div>

            <Calculator />

            <div className="mt-20 py-4 text-center">
              <p className="text-gray-400">Designed & Developed by</p>
              <a
                href="http://aboutharsh.vercel.app/"
                className="text-indigo-500 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Harsh Vardhan Pandey
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
