import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import PlotCurves from './components/PlotCurves';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <PlotCurves title="Curves plot"/>
        <PlotCurves title="Curves plot"/>
        <PlotCurves title="Curves plot"/>
        <PlotCurves title="Curves plot"/>

      </div>
    </div>
  );
}

export default App;
