
import './App.css';
import HomeLeft from './page/homeleft'; 
import HomeRight from './page/homeRight';

function App() {
  return (
    <section className="w-screen h-screen flex">
      <HomeLeft />
      <HomeRight />
    </section>
  );
}

export default App;
