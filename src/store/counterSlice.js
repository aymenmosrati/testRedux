import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "./authSlice";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      //   state.value += 1;
      state.value += action.payload;
    },
    decrease: (state, action) => {
      //   state.value -= 1;
      state.value -= action.payload;
    },
  },

  //********  methode 1 extra reducer  ********
  // extraReducers: (builder) => {
  //   builder.addCase(logOut, (state, action) => {
  //     state.value = action.payload;
  // console.log(action);
  //   console.log("SDSD");
  //   });
  // },

  //******** methode 2 extra reducer  ********
  extraReducers: {
    [logOut]: (state, action) => {
      state.value = action.payload;
      console.log(action);
      console.log("SDSD");
    },
  },
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
