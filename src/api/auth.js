import axios from "axios";

const API_BASE_URL = "/auth";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/login`,
      { email, password },
      {
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
          // If the API needs an auth token for the request, uncomment and update the token value
          // "Authorization": `Bearer ${YOUR_TOKEN}`
        },
        withCredentials: true, // You might set this to true if cookies are needed
      }
    );

    console.log("Login successful:", response.data);

    // Store the token for future API requests
    localStorage.setItem("authToken", response.data.token);

    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};



// User signup function
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, { name, email, password });
    return response.data; // Returns the API response
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};
