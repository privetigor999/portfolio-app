import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

export const getItems = createAsyncThunk(
  "projects/getTests",
  async (_, { rejectWithValue, dispatch }) => {
    const resp = await axios.get(
      "https://633d157ef2b0e623dc6c7787.mockapi.io/projects"
    );
    dispatch(setItems(resp.data));
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [getItems.pending]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [getItems.fulfilled]: (state) => {
      state.loading = false;
    },
    [getItems.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setItems } = projectsSlice.actions;
export default projectsSlice.reducer;
