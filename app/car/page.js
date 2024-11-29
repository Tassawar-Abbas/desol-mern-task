"use client";
import React, { useState } from "react";
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Alert,
} from "@mui/material";
import axios from "axios";

export default function Car() {
    const [formData, setFormData] = useState({
        carModel: "",
        price: "",
        phone: "",
        city: "",
        numberOfCars: "",
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [selectedImage, setSelectedImage] = useState(null); // Image file
    const [previewUrl, setPreviewUrl] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.carModel) newErrors.carModel = "Car model is required.";
        if (!formData.price || isNaN(formData.price))
            newErrors.price = "Valid price is required.";
        if (!formData.phone || !/^\d+$/.test(formData.phone))
            newErrors.phone = "Valid phone number is required.";
        if (!formData.city) newErrors.city = "City is required.";
        if (!formData.numberOfCars)
            newErrors.numberOfCars = "Number of cars is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");

        if (validateForm()) {
            let data = {
                vehicleModel: formData.carModel,
                vehiclePrice: formData.price,
                phone: formData.phone,
                city: formData.city,
                vehicleImages:[selectedImage],
            }
            const response = await axios.post("/api/module/car", data, {
                headers: { "Content-Type": "application/json" },
            });
            console.log(response, "car request respone")
            setFormData({
                carModel: "",
                price: "",
                phone: "",
                city: "",
                numberOfCars: "",
            });
            setErrors({});
        }
    };

    return (

        <div
            style={{
                maxWidth: "600px",
                margin: "50px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "#fff"
            }}
        >
            {successMessage && (
                <Alert severity="success" sx={{ mt: 2 }}>
                    {successMessage}
                </Alert>
            )}
            <Typography variant="h4" gutterBottom align="center">
                Car Information
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Car Model"
                    variant="outlined"
                    fullWidth
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    margin="normal"
                    error={!!errors.carModel}
                    helperText={errors.carModel}
                />
                <TextField
                    label="Price"
                    variant="outlined"
                    fullWidth
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    margin="normal"
                    error={!!errors.price}
                    helperText={errors.price}
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    margin="normal"
                    error={!!errors.phone}
                    helperText={errors.phone}
                />
                <Typography variant="subtitle1" gutterBottom>
                    City
                </Typography>
                <RadioGroup
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel value="Lahore" control={<Radio />} label="Lahore" />
                    <FormControlLabel
                        value="Karachi"
                        control={<Radio />}
                        label="Karachi"
                    />
                    <FormControlLabel
                        value="Islamabad"
                        control={<Radio />}
                        label="Islamabad"
                    />
                </RadioGroup>
                {errors.city && (
                    <Typography variant="caption" color="error">
                        {errors.city}
                    </Typography>
                )}
                <FormControl fullWidth margin="normal" error={!!errors.numberOfCars}>
                    <InputLabel>Number of Cars</InputLabel>
                    <Select
                        name="numberOfCars"
                        value={formData.numberOfCars}
                        onChange={handleChange}
                    >
                        {Array.from({ length: 10 }, (_, index) => index + 1).map((num) => (
                            <MenuItem key={num} value={num}>
                                {num}
                            </MenuItem>
                        ))}
                    </Select>
                    {errors.numberOfCars && (
                        <Typography variant="caption" color="error">
                            {errors.numberOfCars}
                        </Typography>
                    )}
                </FormControl>
                <Button
                    variant="contained"
                    component="label"
                    sx={{ mb: 2 }}
                >
                    Select Image
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        hidden
                    />
                </Button>

                {previewUrl && (
                    <Card
                        sx={{
                            maxWidth: "100%",
                            mt: 2,
                            boxShadow: 3,
                            overflow: "hidden",
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={previewUrl}
                            alt="Selected"
                            sx={{
                                maxHeight: "300px",
                                objectFit: "cover",
                            }}
                        />
                    </Card>
                )}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Submit
                </Button>
            </form>

            {successMessage && (
                <Alert severity="success" sx={{ mt: 2 }}>
                    {successMessage}
                </Alert>
            )}
        </div>
    );
}
