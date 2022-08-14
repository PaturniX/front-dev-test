import './App.css';

// Import Conponent
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar.jsx'
import PlaceList from './components/PlaceList/PlaceList';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <PlaceList />
    </div>
  );
}

export default App;
