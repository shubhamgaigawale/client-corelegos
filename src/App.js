import "./App.css";
import AboutUs from "./Components/AboutPage/AboutUs";
import JobDescription from "./Components/Content/CareerPages/JobDescription";
import JobOpening from "./Components/Content/CareerPages/JobOpening";
import Home from "./Components/Content/Home";
import AutomationService from "./Components/Content/Services/AllServices/AutomationService";
import DevSecOpsService from "./Components/Content/Services/AllServices/DevSecOpsService";
import { FullstackService } from "./Components/Content/Services/AllServices/FullstackService";
import SystemDesignService from "./Components/Content/Services/AllServices/SystemDesignService";
import OurServices from "./Components/Content/Services/OurServices";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/sda" element={<SystemDesignService />} />
          <Route path="/fullstack" element={<FullstackService />} />
          <Route path="/devsecops" element={<DevSecOpsService />} />
          <Route path="/automation" element={<AutomationService />} />
          <Route path="/career" element={<JobOpening />} />
          <Route path="/jobDescription" element={<JobDescription />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
