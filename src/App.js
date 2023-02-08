import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AdoptPage from './pages/AdoptPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='adopt' element={<AdoptPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
