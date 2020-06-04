import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'spotify-clone',
      storage,
      whiteList: ['auth', 'user', 'playlist', 'player'],
    },
    reducers
  );

  return persistedReducer;
};
