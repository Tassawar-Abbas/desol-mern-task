"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // For programmatic navigation
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
} from "@mui/material";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const router = useRouter(); // Next.js router hook

  const handleChange = (e) => {
    const { password, value } = e.target;
    setFormData({ ...formData, [password]: value });
    setErrors({ ...errors, [password]: "" }); // Clear error for the specific field
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { password: "", email: "" };

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validate()) {
      console.log("Form Submitted:", formData);
      router.push("/car");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          padding: 3,
          borderRadius: 2,
          border: "1px solid #ccc",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add shadow
          backgroundColor: "#fff", // Ensure a contrasting background
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            name="name"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}
