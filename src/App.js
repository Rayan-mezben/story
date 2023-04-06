import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import PlotCurves from './components/PlotCurves';
import Plotgauge from './components/Plotgauge';
import PlotBars from './components/PlotBars';

function App() {
  return (
    <div className="container-fluid">
      <div className="row"> 
      <PlotCurves title="Curves plot" x={[5,7,9,3]} y={[1,5,9,3]} /> 
        <PlotCurves title="Curves plot" x={[2,9,3,3]} y={[8,6,3,2]} />
        <PlotCurves title="Curves plot" x={[5,7,9,3]} y={[9,2,1,5]}/>
        <PlotCurves title="Curves plot"x={[5,7,9,3]} y={[4,8,2,7]}/>
        <Plotgauge title="speedometer"x={[5,7,9,3]} y={[2,1,4,8]}/>
        <PlotBars title="acceleration from 0km/h for 5s"x={["nissan gtr","porsch cayenne","mazda rx7" ]} y={[87,65,94]}/>
      </div>
    </div>
  );
}

export default App;
