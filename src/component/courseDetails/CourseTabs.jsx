const CourseTabs = ({ activeTab, setActiveTab, reviewsCount }) => (
  <div className="mb-8 border-b border-gray-200">
    <div className="flex space-x-8">
      {["description", "schedule", "reviews"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-4 px-1 font-medium transition-colors ${
            activeTab === tab
              ? "border-b-2 border-blue-700 text-blue-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
          {tab === "reviews" && ` (${reviewsCount})`}
        </button>
      ))}
    </div>
  </div>
);

export default CourseTabs;