// ServiceInfo.js
import React from 'react';
import Navigation from '../../../common/Navigation';

const ServiceInfo = () => {
  return (
    <div>
      <Navigation />
      <div className="ts-page-wrapper ts-homepage ts-full-screen-page" id="page-top">
        <iframe
          src="/info-template.html"
          title="Info Template"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default ServiceInfo;
