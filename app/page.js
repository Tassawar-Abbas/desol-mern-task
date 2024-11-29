"use client";
import axios from "axios";
import Login from '@/component/login/LoginForm'
import { Box } from "@mui/material";
import { useEffect } from 'react';

export default function Home() {
  let addUser = async () => {
    const userData = await axios.post("/api/module/user", {
      email: "Amjad@desolint.com",
    }, {
      headers: { "Content-Type": "application/json" },
    });
    if (!userData?.response?.data?.email) {
      const response = await axios.post("/api/module/user", {
        email: "Amjad@desolint.com",
        password: "123456abc",
      }, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
    }
  }
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
