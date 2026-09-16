import React, { useEffect, useState } from "react";
import "./maclanding.css";
import { macData } from "./maclandingdata";
import ExploreIphone from "../../iphone/explorelineup/ExploreIphone";

const tabs = ["All products", "Laptops", "Desktops", "Displays"];

export default function MacLanding() {
  const [activeTab, setActiveTab] = useState("All products");
  const [filteredData, setFilteredData] = useState(macData);

  useEffect(() => {
    console.log("i have data", activeTab);
    if (activeTab === "All products") {
      setFilteredData(macData);
    } else {
      const filtered = macData.filter((item) => item.type === activeTab);
      setFilteredData(filtered);
    }
  }, [activeTab]);

  return (
    <div className="mac-tabs-container">
      <h1 className="mac-title">Mac</h1>

      <div className="mac-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`mac-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Example content area */}
      <div className="mac-content">
        <ExploreIphone data={filteredData} />
      </div>
    </div>
  );
}
