import React from "react";
import "../App.css";
import SideFilter from "./SideFilter";

const Reports = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideFilter />
      <div className="content">
        <h2>Reports</h2>
        <p className="api-ref">API Reference</p>
        <div className="empty-state">
          <div className="icon">📄</div>
          <h3>Create Your First Project</h3>
          <p>Let's Tell Your Data Story Together</p>
          <button className="create-btn">+ Create API Key</button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
