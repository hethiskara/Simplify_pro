import axios from "axios";

const API_BASE_URL = "https://simplifypro.palsbase.online";


export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      { email, password },
      {
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
        },
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
    const response = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      { name, email, password }
    );

    // Handle success: Show a success message to the user
    console.log("Signup successful:", response.data);
    alert("Signup successful! You can now log in.");

    return response.data; // Returns the API response
  } catch (error) {
    // Handle error: Show an error message to the user
    console.error("Signup error:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Signup failed. Please try again.");
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};

