import CoursesList from "./Components/CoursesList";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import EnquiryDetails from "./Components/EnquiryDetails";
import EnquiryList from "./Components/EnquiryList";



function App() {
  return (
    <>
      <Routes>
        <Route path="/courseslist" element={<CoursesList/>}/>
        <Route path="/enquirydetails/:id" element={<EnquiryDetails/>}/>
        <Route path="/enquiries/:id" element={<EnquiryList/>}/>

        <Route path="*" element={<Navigate to="/courses" replace/>}/>
      </Routes>
    </>
    
  );
}

export default App;
