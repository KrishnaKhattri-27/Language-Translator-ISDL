import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Krishna",
    email: "krishna5@gmail.com",
    phone: "8953265785",
    bio: "Software Developer",
    location: "Jaipur",
  });

  const [editData, setEditData] = useState(profileData);

  const handleInputChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  return (
    <div className="w-screen bg-gray-900 text-gray-200 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center border-b border-gray-700 pb-4">
          Profile
        </h2>
        <div className="flex flex-col space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ) : (
              <p className="p-3 bg-gray-700 rounded-md">
                {profileData.name || "Not provided"}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ) : (
              <p className="p-3 bg-gray-700 rounded-md">
                {profileData.email || "Not provided"}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={editData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ) : (
              <p className="p-3 bg-gray-700 rounded-md">
                {profileData.phone || "Not provided"}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={editData.location}
                onChange={handleInputChange}
                placeholder="Enter your location"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ) : (
              <p className="p-3 bg-gray-700 rounded-md">
                {profileData.location || "Not provided"}
              </p>
            )}
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            {isEditing ? (
              <textarea
                name="bio"
                value={editData.bio}
                onChange={handleInputChange}
                placeholder="Enter a short bio about yourself"
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                rows={4}
              ></textarea>
            ) : (
              <p className="p-3 bg-gray-700 rounded-md">
                {profileData.bio || "Not provided"}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-600 text-gray-200 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-gray-200 rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-gray-200 rounded-md hover:bg-blue-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
