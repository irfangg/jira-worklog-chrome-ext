import { render } from '@testing-library/react';
import chrome from 'sinon-chrome/extensions';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-undef
    global.chrome = chrome;
  });
  const initialState = {
    worklogs: {
      workLogItems: [],
      filterBy: {},
    },
    options: {
      autoComment: false,
      showTask: false,
    },
    home: {
      domain: '',
      error: '',
    },
    loggedDetails: {
      savingInProgress: false,
      savedLogs: [],
    },
  };
  const mockStore = configureStore();

  it('Add new Button to be present', () => {
    const store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText('Add New')).not.toBeNull();
  });
  afterAll(() => {
    chrome.flush();
  });
});
