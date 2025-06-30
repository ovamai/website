import React from "react";
import "../App.css";
import SideFilter from "./SideFilter";
import { GoPlusCircle } from "react-icons/go";

const Reports = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideFilter />
      <div className="content ">
        <h2 className="mb-4">Reports</h2>
        <div className="empty-state flex-col ">
          <div>
            <div className="icon">📄</div>
            <h3>Create Your first report</h3>
            <p>Let's tell your data's Story Together</p>
          </div>
          <button className="create-btn flex justify-between items-center ">
            <GoPlusCircle className="mr-2" /> Create Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
