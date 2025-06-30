import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const initialTheme = localStorage.getItem('streamify-theme') || 'coffee';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: initialTheme },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('streamify-theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export const useTheme = () => useSelector((state) => state.theme.theme);
export const useSetTheme = () => {
  const dispatch = useDispatch();
  return (theme) => dispatch(setTheme(theme));
};
