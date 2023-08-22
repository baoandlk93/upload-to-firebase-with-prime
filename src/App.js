import logo from './logo.svg';
import './App.css';
import TemplateDemo from './component/TemplateDemo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadFirebase from './component/UploadFirebase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateDemo/>}>
        </Route>
        <Route path="/upload" element={<UploadFirebase/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
