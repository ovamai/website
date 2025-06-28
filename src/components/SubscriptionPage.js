import React from "react";
import "../App.css";
import SideFilter from "./SideFilter";

const SubscriptionPage = () => {
  return (
    <div className="dashboard">
      <SideFilter />
      <main className="main-content">
        <div className="subscription-header">
          <div>
            <h2>Subscription</h2>
            <p>Trial • Pro</p>
          </div>
          <div className="header-actions">
            <button>Delete Account</button>
            <button>Manage Subscription</button>
            <button className="pro-button">Activate PRO</button>
          </div>
        </div>

        <div className="seat-assignment">
          <h3>Seat Assignment</h3>
          <label>
            <input type="radio" name="seat" defaultChecked />
            Automatically add seats for new developers
          </label>
          <label>
            <input type="radio" name="seat" />
            Manually add and assign seats (Default)
          </label>
        </div>

        <div className="search-and-tabs">
          <input type="text" placeholder="Search..." />
          <div className="tabs">
            <button>Users</button>
            <button>Bots</button>
            <button>Billing admins</button>
          </div>
          <div className="filter-tabs">
            <button className="active">All</button>
            <button>Assigned</button>
            <button>Unassigned</button>
          </div>
          <button className="invite-btn">Invite Billing Admin</button>
        </div>

        <div className="no-data">
          <div className="icon">👥</div>
          <p>No seats assigned</p>
          <small>Assign seats to populate with data.</small>
        </div>
      </main>
    </div>
  );
};

export default SubscriptionPage;
