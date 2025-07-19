import React from "react";

const FilterSection = ({
  capacityRange,
  handleCapacityChange,
  searchQuery,
  setSearchQuery,
  instructorEmail,
  setInstructorEmail,
  Ordering,
  setOrdering
}) => {
  return (
    <>
      <div className="md:col-span-1">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2 mt-4">Filters</h2>
          <p className="text text-sm text-gray-500 mb-4">
            Customize your course search.
          </p>

          {/* Static Search Input */}
          <div className="mb-4">
            <label className="block text-normal font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter Instructor Email"
              value={instructorEmail}
              onChange={(e) => setInstructorEmail(e.target.value)}
            />
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacity Range 
            </label>

          {/* Static Category */}
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full border rounded px-3 py-2" disabled>
              <option>All Categories</option>
              <option>Yoga</option>
              <option>Strength</option>
            </select>
          </div> */}

          {/* Level Options */}
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Level
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="level" disabled />
                <span>All Levels</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="level" disabled />
                <span>Beginner</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="level" disabled />
                <span>Intermediate</span>
              </label>
            </div>
          </div> */}

          
          {/* Min Range  */}
          <div className="flex items-center space-x-4">
            <input
              type="number"
              min="0"
              max={capacityRange[1]}
              value={capacityRange[0]}
              onChange={(e) => handleCapacityChange(0, Number(e.target.value))}
              className="w-20 p-2 border rounded-md"
            />
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={capacityRange[0]}
              onChange={(e) => handleCapacityChange(0, Number(e.target.value))}
              className="w-full"
            />
          </div>
          {/* Max Range  */}
          <div className="flex items-center space-x-4">
            <input
              type="number"
              min={capacityRange[0]}
              max="1000"
              value={capacityRange[1]}
              onChange={(e) => handleCapacityChange(1, Number(e.target.value))}
              className="w-20 p-2 border rounded-md"
            />
            <input
              type="range"
              min={capacityRange[0]}
              max="1000"
              step="10"
              value={capacityRange[1]}
              onChange={(e) => handleCapacityChange(1, Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{capacityRange[0]}</span>
            <span>{capacityRange[1]}</span>
          </div>

          {/* Tags */}
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                React
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                Node.js
              </span>
            </div>
          </div> */}

          {/* Date Picker */}
          {/* <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Updated
            </label>
            <input
              type="text"
              placeholder="Pick a date"
              className="w-full border rounded px-3 py-2"
              disabled
            />
          </div> */}

          <button
            className="w-full border mt-4 py-2 rounded bg-gray-50"
            onClick={() => {
              handleCapacityChange(0,0);
              setSearchQuery('');
              setInstructorEmail('');
              setOrdering('');
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
