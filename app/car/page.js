"use client";
import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, MenuItem, Select, InputLabel, FormControl, Typography, Card, CardContent, CardMedia } from '@mui/material';

export default function Car() {
  const [formData, setFormData] = useState({
    carModel: '',
    price: '',
    phone: '',
    city: '',
    numberOfCars: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom align="center">Car Information</Typography>
      
      <form onSubmit={handleSubmit}>
        {/* Car Model Field */}
        <TextField
          label="Car Model"
          variant="outlined"
          fullWidth
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          margin="normal"
        />

        {/* Price Field */}
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          name="price"
          value={formData.price}
          onChange={handleChange}
          margin="normal"
        />

        {/* Phone Field */}
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
        />

        {/* City Field (Radio Buttons) */}
        <Typography variant="subtitle1" gutterBottom>City</Typography>
        <RadioGroup
          name="city"
          value={formData.city}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="Lahore" control={<Radio />} label="Lahore" />
          <FormControlLabel value="Karachi" control={<Radio />} label="Karachi" />
          <FormControlLabel value="Islamabad" control={<Radio />} label="Islamabad" />
        </RadioGroup>

        {/* Number of Cars Dropdown */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Number of Cars</InputLabel>
          <Select
            name="numberOfCars"
            value={formData.numberOfCars}
            onChange={handleChange}
            label="Number of Cars"
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Submit Button */}
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

      {/* Car Image and Delete Button */}
      <Card sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 3 }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 150, objectFit: 'cover' }}
          image="https://via.placeholder.com/150"
          alt="Car Image"
        />
        <CardContent>
          <Button variant="outlined" color="error">Delete</Button>
        </CardContent>
      </Card>
    </div>
  );
}
