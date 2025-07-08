import React from 'react';
import VisitorForm from './components/VisitorForm';

function App() {
  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: 400, margin: 'auto' }}>
      <h2>Visitor Check-In</h2>
      <VisitorForm />
    </div>
  );
}

export default App;
