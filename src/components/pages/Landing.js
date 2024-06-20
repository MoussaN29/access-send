import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav>
          {/* Add any additional header content or navigation here */}
        </nav>
      </header>
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to the Landing Page</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
            onClick={() => navigate('/family/home')}
            style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Family View
          </button>
          <button
            onClick={() => navigate('/business/home')}
            style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Business View
          </button>
          <button
            onClick={() => navigate('/authority/home')}
            style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Authority View
          </button>
          <button
            onClick={() => navigate('/admin/home')}
            style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Admin View
          </button>
        </div>
      </main>
    </div>
  );
}

export default Landing;
