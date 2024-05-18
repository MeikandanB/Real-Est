// Sample property posting form component
import React, { useState } from 'react';

const PropertyForm = () => {
  const [property, setProperty] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    hospitalsNearby: '',
    collegesNearby: ''
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit property to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="place" value={property.place} onChange={handleChange} placeholder="Place" required />
      <input name="area" value={property.area} onChange={handleChange} placeholder="Area" required />
      <input name="bedrooms" value={property.bedrooms} onChange={handleChange} placeholder="Bedrooms" required />
      <input name="bathrooms" value={property.bathrooms} onChange={handleChange} placeholder="Bathrooms" required />
      <input name="hospitalsNearby" value={property.hospitalsNearby} onChange={handleChange} placeholder="Hospitals Nearby" required />
      <input name="collegesNearby" value={property.collegesNearby} onChange={handleChange} placeholder="Colleges Nearby" required />
      <button type="submit">Post Property</button>
    </form>
  );
};

export default PropertyForm;
