import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

declare global {
  interface Console {
    // eslint-disable-next-line
    tron: any;
  }
}

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  const tron: any = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect();

  tron.clear();

  console.tron = tron; // so we can access tron in the whole application through console
}
