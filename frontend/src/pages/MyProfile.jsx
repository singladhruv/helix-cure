import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FiEdit2 } from 'react-icons/fi';

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);

      if (image) formData.append('image', image);

      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
        headers: { token },
      });

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return userData ? (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl p-6">
      {/* Header with Avatar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : userData.image}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover opacity-90"
            />
            {isEdit && (
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                <FiEdit2 className="text-gray-600 text-xs" />
              </div>
            )}
            <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>
        </div>
        <div>
          <h2 className="font-semibold text-lg">{userData.name}</h2>
          <p className="text-sm text-gray-500">{userData.email}</p>
        </div>
      </div>

      {/* Editable Fields */}
      <div className="space-y-4 text-sm">

        {/* Name */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Name</span>
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
              className="text-right outline-none"
            />
          ) : (
            <span className="text-gray-800">{userData.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Email</span>
          {isEdit ? (
            <input
              type="email"
              value={userData.email}
              disabled
              className="text-right outline-none bg-gray-100 cursor-not-allowed"
            />
          ) : (
            <span className="text-gray-800">{userData.email}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Phone</span>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
              className="text-right outline-none"
            />
          ) : (
            <span className="text-gray-800">{userData.phone || 'Add number'}</span>
          )}
        </div>

        {/* Address */}
        <div className="flex justify-between items-start border-b pb-2">
          <span className="text-gray-600">Address</span>
          {isEdit ? (
            <div className="text-right space-y-1 w-2/3">
              <input
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))
                }
                className="w-full outline-none bg-gray-50"
              />
              <input
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))
                }
                className="w-full outline-none bg-gray-50"
              />
            </div>
          ) : (
            <span className="text-gray-800 text-right">
              {userData.address.line1} <br />
              {userData.address.line2}
            </span>
          )}
        </div>

        {/* Gender */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Gender</span>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
              className="outline-none bg-gray-50"
            >
              <option value="Not Selected">Not Selected</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <span className="text-gray-800">{userData.gender}</span>
          )}
        </div>

        {/* DOB */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Birthday</span>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
              className="outline-none bg-gray-50"
            />
          ) : (
            <span className="text-gray-800">{userData.dob}</span>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 text-center">
        {isEdit ? (
          <button
            onClick={updateUserProfileData}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Change
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  ) : null;
};

export default MyProfile;
