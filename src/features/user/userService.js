import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getTokenFromLocalStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
console.log(getTokenFromLocalStorage);
const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : ""
    }`,
    Accept: "application/json",
  },
};

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    return response.data;
  }
};

const getUserWishList = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};

const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};

const getUserCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config);
  if (response.data) {
    return response.data;
  }
};

const removeProductFromCart = async (cartItemId) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const updateProductFromCart = async (cardDetail) => {
  const response = await axios.put(
    `${base_url}user/update-product-cart/${cardDetail.cartItemId}/${cardDetail.quantity}`,
    "",
    config
  );
  if (response.data) {
    return response.data;
  }
};

const createOrder = async (orderDetail) => {
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetail,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const getUserOrders = async () => {
  const response = await axios.get(`${base_url}user/getmyorders`, config);
  if (response.data) {
    return response.data;
  }
};

const updateProfile = async (userData) => {
  const response = await axios.put(
    `${base_url}user/edit-user`,
    userData,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const forgotPassToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const resetPassword = async (data) => {
  const response = await axios.put(
    `${base_url}user/reset-password/:${data?.token}`,
    { password: data?.password },
    config
  );
  if (response.data) {
    return response.data;
  }
};

const emptyCart = async () => {
  const response = await axios.delete(`${base_url}user/empty-cart/`, config);
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
  login,
  getUserWishList,
  addToCart,
  getUserCart,
  removeProductFromCart,
  updateProductFromCart,
  createOrder,
  getUserOrders,
  updateProfile,
  forgotPassToken,
  resetPassword,
};
