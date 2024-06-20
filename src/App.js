import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import FamilyHome from './components/pages/Family/Home';
import FamilyAbout from './components/pages/Family/About';
import FamilyBlog from './components/pages/Family/Blog';
import FamilyBooking from './components/pages/Family/Booking';
import FamilyProfile from './components/pages/Family/Profile';
import FamilyMap from './components/pages/Family/Map';
import FamilyMessage from './components/pages/Family/Message';
import FamilyReview from './components/pages/Family/Review';
import FamilyServiceInfo from './components/pages/Family/ServiceInfo';
import FamilySubscription from './components/pages/Family/Subscription';
import BusinessDashboard from './components/pages/Business/Dashboard';
import BusinessInformation from './components/pages/Business/Information';
import BusinessClaim from './components/pages/Business/Claim';
import BusinessBookings from './components/pages/Business/Bookings';
import BusinessMessaging from './components/pages/Business/Messaging';
import BusinessSubscription from './components/pages/Business/Subscription';
import BusinessReviews from './components/pages/Business/Reviews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="family/*" element={<FamilyRoutes />} />
        <Route path="business/*" element={<BusinessRoutes />} />
      </Routes>
    </Router>
  );
}

function FamilyRoutes() {
  return (
    <Routes>
      <Route path="home" element={<FamilyHome />} />
      <Route path="about" element={<FamilyAbout />} />
      <Route path="blog" element={<FamilyBlog />} />
      <Route path="booking" element={<FamilyBooking />} />
      <Route path="profile" element={<FamilyProfile />} />
      <Route path="map" element={<FamilyMap />} />
      <Route path="message" element={<FamilyMessage />} />
      <Route path="review" element={<FamilyReview />} />
      <Route path="serviceinfo" element={<FamilyServiceInfo />} />
      <Route path="subscription" element={<FamilySubscription />} />
    </Routes>
  );
}

function BusinessRoutes() {
  return (
    <Routes>
      <Route path="home" element={<BusinessDashboard />} />
      <Route path="information" element={<BusinessInformation />} />
      <Route path="claim" element={<BusinessClaim />} />
      <Route path="bookings" element={<BusinessBookings />} />
      <Route path="messaging" element={<BusinessMessaging />} />
      <Route path="subscription" element={<BusinessSubscription />} />
      <Route path="reviews" element={<BusinessReviews />} />
    </Routes>
  );
}

export default App;
