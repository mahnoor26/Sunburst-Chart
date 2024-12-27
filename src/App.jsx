import "./App.css";
import SunburstChart from "./components/SunburstChart";
import { data } from "./constants/SampleData";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Sunburst Chart</h1>
        <div
          style={{
            width: 950,
            marginTop: 100,
          }}
        >
          <SunburstChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
