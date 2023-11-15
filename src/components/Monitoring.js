import React, { useState } from "react";
import "../style/monitoring.css";
import Table from "./Table";
import ClosingAcc from "./ClosingAcc";
const Monitoring = () => {
  const [status, setStatus] = useState("pending");
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [close, setClose] = useState(false);

  return (
    <div className="monitoring">
      <h1>Monitoring</h1>
      <div className="tabs">
        <div className="toggle">
          <p
            className={status === "pending" ? "active" : ""}
            onClick={() => {
              setStatus("pending");
              setSearch("");
              setLevel("");
            }}
          >
            Pending
          </p>
          <p
            className={status === "completed" ? "active" : ""}
            onClick={() => {
              setStatus("completed");
              setSearch("");
              setLevel("");
            }}
          >
            completed
          </p>
        </div>
        <button className="btn" onClick={() => setClose(true)}>
          <span class="material-symbols-outlined">cancel</span>
          <p>Close account</p>
        </button>
      </div>
      <div className="filter">
        <div className="search-flex">
          <span class="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select>
          <option>Trigger reason</option>
          <option>Hard flag</option>
          <option>Temp flag</option>
        </select>
        <select onChange={(e) => setLevel(e.target.value)} value={level}>
          <option value="">Risk level</option>
          <option value="High">high</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="table">
        <Table status={status} search={search} level={level} />
      </div>
      {close && <ClosingAcc setClose={setClose} />}
    </div>
  );
};

export default Monitoring;
