import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FunnelChart from "./components/funnel";

function App() {
    const data = [
        { name: "Prospects", value: 252 },
        { name: "Leads", value: 105 },
        { name: "oportunidades", value: 84 },
        { name: "Vendas", value: 72 },
        // { name: "Commitment", value: 19 },
        // { name: "Pre-sale", value: 0 },
        // { name: "Sale", value: 10 },
    ];

    return (
        <div className="App">
            <div className="col-md-6" style={{ backgroundColor: "blue" }}>
                <FunnelChart data={data} showNames={false} />
            </div>
        </div>
    );
}

export default App;
