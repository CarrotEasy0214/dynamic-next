import React, { useState } from "react";

// TabMenu 컴포넌트
const TabMenu: React.FC = () => {
  // 활성 탭 상태를 저장할 상태 훅
  const [activeTab, setActiveTab] = useState<string>("tab1");

  // 탭 클릭 핸들러
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-menu">
      <div className="tabs">
        <div className={`tab ${activeTab === "tab1" ? "active" : ""}`} onClick={() => handleTabClick("tab1")}>
          Tab 1
        </div>
        <div className={`tab ${activeTab === "tab2" ? "active" : ""}`} onClick={() => handleTabClick("tab2")}>
          Tab 2
        </div>
        <div className={`tab ${activeTab === "tab3" ? "active" : ""}`} onClick={() => handleTabClick("tab3")}>
          Tab 3
        </div>
        <div className={`tab ${activeTab === "tab4" ? "active" : ""}`} onClick={() => handleTabClick("tab4")}>
          Tab 4
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && <div>Content for Tab 1</div>}
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
        {activeTab === "tab4" && <div>Content for Tab 4</div>}
      </div>
    </div>
  );
};

export default TabMenu;
