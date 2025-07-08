import React, { useState } from 'react';

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    business: '',
    email: '',
    phone: '',
    visiting: '',
  });

  const [timestamp, setTimestamp] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const formattedTimestamp = now.toISOString();

    setTimestamp(formattedTimestamp);

    const payload = {
      ...formData,
      checkInTime: formattedTimestamp,
    };

    console.log('Form submitted:', payload);
    alert('Check-in recorded!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="business"
        placeholder="Business"
        value={formData.business}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="visiting"
        placeholder="Whom Visiting"
        value={formData.visiting}
        onChange={handleChange}
        required
      />
      <button type="submit">Check In</button>
    </form>
  );
};

export default VisitorForm;
