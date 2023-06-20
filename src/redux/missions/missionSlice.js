import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = createAsyncThunk(
  'mission/fetchMission',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.pending, (state) => {
        state.status = 'loadding...';
      })
      .addCase(fetchMission.fulfilled, (state, action) => {
        state.status = 'suceeded';
        state.data = action.payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        }));
      })
      .addCase(fetchMission.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
