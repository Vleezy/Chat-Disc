import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setChannelId } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer