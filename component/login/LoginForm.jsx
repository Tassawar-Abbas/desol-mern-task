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
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const router = useRouter(); // Next.js router hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the specific field
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
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
    e.preventDefault(); // Prevent default form submission behavior
    if (validate()) {
      console.log("Form Submitted:", formData);
      // Redirect to another route (e.g., /dashboard) after successful validation
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
          {/* Name Field */}
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.name)}
            helperText={errors.name}
          />

          {/* Email Field */}
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

          {/* Submit Button */}
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
