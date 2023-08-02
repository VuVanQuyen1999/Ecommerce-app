import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactService } from "./contactService";
import { toast } from "react-toastify";
export const postQuery = createAsyncThunk(
  "contact/post-contact",
  async (contactData, thunkAPI) => {
    try {
      return await contactService.postQuery(contactData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  contact: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(postQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.contact = action.payload;
        if (state.isSuccess === true) {
          toast.success("Thank you for comment");
        }
      })
      .addCase(postQuery.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload.message;
        if (state.isError === true) {
          console.log("run");
          toast.error(action.payload.message);
        }
      });
  },
});

export default contactSlice.reducer;
