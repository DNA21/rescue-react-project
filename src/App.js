import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DogList from './features/animals/DogList';
import CatList from './features/animals/CatList';
import AdoptCatPage from './pages/AdoptCatPage';
import AdoptDogPage from './pages/AdoptDogPage';

function App() {
    return (
        <div className='App'>
            {/*<Header /> */}
            {/* <DogList /> */}
            {/* <CatList /> */}
            {/* <AdoptCatPage /> */}
            <AdoptDogPage />
            <Footer />
        </div>
    );
};

export default App;
