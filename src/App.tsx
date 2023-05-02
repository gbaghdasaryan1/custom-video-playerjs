import './App.css';
import Slider from "./components/slider";
import { mediasMock } from "./data/media";

const App = () => {


  return (
    <div>
      <Slider data={mediasMock}/>
    </div >
  );
};

export default App;
