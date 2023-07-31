import logo from './logo.svg';
import './App.css';
import CreatePet from './components/create-pets';
import MainNavbar from './components/navbar.component';

function App() {
  return (
    <>
    <div>
      <MainNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/pets/add" element={<CreatePet />} />
        </Routes>
      </BrowserRouter>
      <MainFooter />
    </div>
  </>
  );
}

export default App;
