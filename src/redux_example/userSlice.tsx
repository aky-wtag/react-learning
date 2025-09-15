import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetechUserById = createAsyncThunk(
  "users/fetchById",
  async (userId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const json = await response.json();
    
    return json;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: { user: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetechUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetechUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetechUserById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      });
  },
});
export default usersSlice.reducer;