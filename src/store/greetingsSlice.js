import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  loading: false,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    setGreetings: (state, action) => {
      state.greetings = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export the setGreetings and setLoading actions
export const { setGreetings, setLoading } = greetingsSlice.actions;

export const fetchGreetings = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch('http://127.0.0.1:3000/');
    const data = await res.json();
    dispatch(setGreetings(data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

// Export the reducer function as the default export
export default greetingsSlice.reducer;
