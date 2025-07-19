import { Route, Routes } from "react-router";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import Courses from '../pages/courses/courses'
import About from '../pages/about/About';
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Instructors from "../component/instractors/instractor";
import Contact from "../pages/Contract/Contact";
import CourseDetail from "../pages/CourseDetails/CourseDetails";

const AppRouts = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/details" element={<CourseDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default AppRouts;
