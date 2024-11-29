"use client";
import Login from '@/component/login/LoginForm'
import { Box } from "@mui/material";
import { useEffect } from 'react';
import axios from "axios";

export default function Home() {
  const addUser = async () => {
    try {
      let data =
      {
        email: "Amjad@desolint.com",
        password: "123456abc",
      }

      const userData = await axios.post("/api/module/user",
        data.email,
        {
          headers: { "Content-Type": "application/json" },
        });

      if (!userData?.data?.email) {
        const response = await axios.post("/api/module/user", data, {
          headers: { "Content-Type": "application/json" },
        });

        console.log('User Created:', response.data);
      } else {
        console.log('User already exists:', userData.data);
      }
    } catch (error) {
      console.error("Error in addUser:", error);
    }
  };

  useEffect(() => {
    addUser()
  }, [])
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        backgroundColor: "#fff", // Optional background color
        padding: 2, // Responsive padding
      }}
    >
      <Login />
    </Box>
  )
}
