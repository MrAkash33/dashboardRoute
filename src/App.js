import './App.css';
import SideBar from './components/Sidebar';
import MainRoutes from './Routes';
function App() {
  return (
    <div className='app'>
      {/* SideBar */}
      <SideBar/>
      {/* Inner Container */}
      <MainRoutes />
    </div>
  );
}

export default App;
