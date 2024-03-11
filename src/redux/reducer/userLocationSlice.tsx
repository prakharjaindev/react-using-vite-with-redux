import { createSlice } from "@reduxjs/toolkit";

export const userLocationSlice = createSlice({
  name: "userLocation",
  initialState: {
    ipAddress: "",
    geoInfo: {},
  },
  reducers: {
    setIpAddress: (state, action) => {
      state.ipAddress = action.payload;
    },
    setGeoInfo: (state, action) => {
      state.geoInfo = action.payload;
    },
  },
});

export const { setIpAddress, setGeoInfo } = userLocationSlice.actions;

export default userLocationSlice.reducer;

//Get the IP Address
export const getVisitorIP = async (dispatch: any) => {
  try {
    const response = await fetch("https://api.ipify.org");
    const data = await response.text();
    // Store IP in State
    dispatch(setIpAddress(data));
  } catch (error) {
    console.error("Failed to fetch IP: ", error);
  }
};

// Use IP from state to get Location Info
export const fetchIPInformation = async (dispatch: any, ipAddress: any) => {
  try {
    const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
    const data = await response.json();
    // Store Location Info in State
    dispatch(setGeoInfo(data));
  } catch (error) {
    console.error("Failed to location info: ", error);
  }
};
