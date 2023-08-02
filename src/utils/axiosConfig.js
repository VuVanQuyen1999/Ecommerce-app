export const base_url = "http://localhost:5000/api/";

const getTokenFromLocalStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
console.log(getTokenFromLocalStorage);
export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : ""
    }`,
    Accept: "application/json",
  },
};
