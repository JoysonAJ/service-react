import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact"
import Brands from "./Components/Brands"
import Services from "./Components/Services"
import Footer from "./Components/Footer";

import './scss/app.scss'
import './scss/header.scss'
import './scss/home.scss'
import './scss/footer.scss'
import './scss/contact.scss'


function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/contact"} element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
