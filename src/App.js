import { Routes, Route } from "react-router-dom";
import Auth from "./layout/Auth/auth";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import MainLayout from "./layout/MainLayout/mainLayout";
import Landing from "./pages/Landing/landing";
import Destinations from "./pages/Destinations/destinations";
import Services from "./pages/Services/services";
import Tours from "./pages/Tours/tours";
import Gallery from "./pages/Gallery/gallery";
import ContactUs from "./pages/ContactUs/contactUs";
import BookNow from "./pages/Tours/BookNow/bookNow";  

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Landing />
        }
      />
      <Route
        path="/destinations"
        element={
          <MainLayout>
            <Destinations />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <Auth>
            <Login />
          </Auth>
        }
      />
      <Route
        path="/signup"
        element={
          <Auth>
            <Signup />
          </Auth>
        }
      />
      <Route
        path="/services"
        element={
          <MainLayout>
            <Services />
          </MainLayout>
        }
      />
      <Route
        path="/tours"
        element={
          <MainLayout>
            <Tours />
          </MainLayout>
        }
      />
      <Route
        path="/gallery"
        element={
          <MainLayout>
            <Gallery />
          </MainLayout>
        }
      />
      <Route
        path="/contactUs"
        element={
          <MainLayout>
            <ContactUs />
          </MainLayout>
        }
      />
      <Route
        path="/bookNow"
        element={
          <MainLayout>
            <BookNow />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
