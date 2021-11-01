import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { wrapper } from '../store/configureStore';
import '../styles/main.scss';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Perikanan</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </Head>
        <div className="app">
          <Component {...pageProps} />
        </div>
      </React.Fragment>
    );
  }
}

export default wrapper.withRedux(MyApp);
