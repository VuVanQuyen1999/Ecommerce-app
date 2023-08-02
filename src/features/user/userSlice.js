import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserWishlist = createAsyncThunk(
  "auth/get-wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWishList();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "auth/add-to-cart",
  async (cartData, thunkAPI) => {
    try {
      return await authService.addToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserCart = createAsyncThunk(
  "auth/get-user-cart",
  async (thunkAPI) => {
    try {
      return await authService.getUserCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeProductFromCart = createAsyncThunk(
  "auth/remove-product-from-cart",
  async (id, thunkAPI) => {
    try {
      return await authService.removeProductFromCart(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProductFromCart = createAsyncThunk(
  "auth/update-product-from-cart",
  async (cartDetail, thunkAPI) => {
    try {
      return await authService.updateProductFromCart(cartDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createOrder = createAsyncThunk(
  "auth/create-order",
  async (orderDetail, thunkAPI) => {
    try {
      return await authService.createOrder(orderDetail);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserOrders = createAsyncThunk(
  "auth/get-my-orders",
  async (thunkAPI) => {
    try {
      return await authService.getUserOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/update-user",
  async (dataUser, thunkAPI) => {
    try {
      return await authService.updateProfile(dataUser);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const emptyCart = createAsyncThunk(
  "auth/empty-cart",
  async (thunkAPI) => {
    try {
      return await authService.emptyCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/reset-password-token",
  async (data, thunkAPI) => {
    try {
      return await authService.resetPassword(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const forgotPasswordToken = createAsyncThunk(
  "auth/forgot-password-token",
  async (dataUser, thunkAPI) => {
    try {
      return await authService.forgotPassToken(dataUser);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getCustomerFromLocalStorage =
  localStorage.getItem("customer") !== null
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

export const resetState = createAction("Reset_all");

const initialState = {
  user: getCustomerFromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
          toast.success("User Created Successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("user", JSON.stringify(action.payload));
          toast.success("Login Successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(getUserWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.wishlist = action.payload;
      })
      .addCase(getUserWishlist.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cart = action.payload;
        if (state.isSuccess === true) {
          toast.success("Add To Cart Successfully");
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload.message;
        if (state.isError === true) {
          toast.error(action.payload.message);
        }
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.userCart = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(removeProductFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.removedProduct = action.payload;
        if (state.isSuccess === true) {
          toast.success("Remove Product Successfully");
        }
      })
      .addCase(removeProductFromCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload.message;
        if (state.isError === true) {
          toast.error(action.payload.message);
        }
      })
      .addCase(updateProductFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updatedProductFromCart = action.payload;
        if (state.isSuccess === true) {
          toast.success("Update Product Quantity Successfully");
        }
      })
      .addCase(updateProductFromCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload.message;
        if (state.isError === true) {
          toast.error(action.payload.message);
        }
      })
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.orderedProduct = action.payload;
        if (state.isSuccess === true) {
          toast.success("Ordered Successfully");
        }
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload.message;
        if (state.isError === true) {
          toast.error(action.payload.message);
        }
      })
      .addCase(getUserOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.getOrderProduct = action.payload;
      })
      .addCase(getUserOrders.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload?.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.userUpdated = action.payload;
        let currentUserData = JSON.parse(localStorage.getItem("user"));
        let newUserData = {
          _id: currentUserData?._id,
          token: currentUserData?.token,
          firstname: action?.payload?.firstname,
          lastname: action?.payload?.lastname,
          email: action?.payload?.email,
          mobile: action?.payload?.mobile,
        };
        localStorage.setItem("user", JSON.stringify(newUserData));
        state.user = newUserData;
        toast.success("Profile Updated Successfully");
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload?.message;
        if (state.isError === true) {
          toast.error("Updated Failed");
        }
      })
      .addCase(forgotPasswordToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPasswordToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.token = action.payload;
        if (state.isSuccess === true) {
          toast.success("Forgot Password Email Sent Successfully");
        }
      })
      .addCase(forgotPasswordToken.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload?.message;
        if (state.isError === true) {
          toast.error("Some thing went wrong");
        }
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.resetPass = action.payload;
        if (state.isSuccess === true) {
          toast.success("Reset Password is Successfully");
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload?.message;
        if (state.isError === true) {
          toast.error("Some thing went wrong");
        }
      })
      .addCase(emptyCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emptyCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.deletedCart = action.payload;
        if (state.isSuccess === true) {
          toast.success("Reset Password is Successfully");
        }
      })
      .addCase(emptyCart.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload?.message;
        if (state.isError === true) {
          toast.error("Some thing went wrong");
        }
      })
      .addCase(resetState, () => initialState);
  },
});

export default authSlice.reducer;
