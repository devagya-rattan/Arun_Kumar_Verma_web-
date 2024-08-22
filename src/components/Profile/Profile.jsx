import React from "react";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col sm:flex-row">
      {/* Left side: Profile Information */}
      <div className="w-full sm:w-1/3 bg-white shadow-lg p-6 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-50 h-50 rounded-full object-cover mb-6"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-4">John Doe</h2>
        <p className="text-gray-600 mb-4">john.doe@example.com</p>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition">
          Change Password
        </button>
      </div>

      {/* Right side: Menu Options */}
      <div className="w-full sm:w-2/3 bg-white shadow-lg p-6 mt-6 sm:mt-0 sm:ml-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Menu</h3>
        <ul className="space-y-4">
          <li className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg cursor-pointer transition flex items-center justify-center">
            Add Publications
          </li>
          <li className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg cursor-pointer transition flex items-center justify-center">
            Add Blog
          </li>
          <li className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg cursor-pointer transition flex items-center justify-center">
            Add Intern
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
