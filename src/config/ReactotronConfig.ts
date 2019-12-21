import Reactotron from 'reactotron-react-js';

declare global {
  interface Console {
    // eslint-disable-next-line
    tron: any;
  }
}

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  const tron: any = Reactotron.configure().connect();

  tron.clear();

  console.tron = tron; // so we can access tron in the whole application through console
}
