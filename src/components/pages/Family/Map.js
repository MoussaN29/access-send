import React from 'react';
import Navigation from '../../../common/Navigation';

const FamilyMap = () => {
  return (
    <div>
      <Navigation />
      <div className="ts-page-wrapper ts-homepage ts-full-screen-page" id="page-top">
        <iframe
          src="/map-template.html"
          title="Map Template"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default FamilyMap;
