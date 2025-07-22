import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FiEdit2 } from 'react-icons/fi';

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext);
  const { currency, backendUrl } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [inputimage, setImage] = useState(false);

  const updateProfile = async () => {
    try {
      const formData = new FormData();

      formData.append('name', profileData.name);
      formData.append('degree', profileData.degree);
      formData.append('speciality', profileData.speciality);
      formData.append('experience', profileData.experience);
      formData.append('about', profileData.about);
      formData.append('fees', profileData.fees);
      formData.append('available', profileData.available);
      formData.append('address', profileData.address);
      if(inputimage) formData.append('image', inputimage);
      
      const { data } = await axios.post(backendUrl + '/api/doctor/update-profile',formData,{ headers: { dToken } });

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        setImage(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }

      setIsEdit(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return profileData ? (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl p-6">
      {/* Header with Avatar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <label htmlFor="image" className={isEdit ? "cursor-pointer" : "cursor-disabled"}>
            <img
              src={inputimage ? URL.createObjectURL(inputimage) : profileData.image}
              alt="Doctor"
              className="w-16 h-16 rounded-full object-cover opacity-90"
            />
            {isEdit && (
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                <FiEdit2 className="text-gray-600 text-xs" />
              </div>
            )}
            <input type="file" id="image" hidden accept="image/*" disabled={!isEdit} onChange= {(e) => {if(isEdit) setImage(e.target.files[0])}} />
          </label>
        </div>
        <div>
          <h2 className="font-semibold text-lg">{profileData.name}</h2>
          <p className="text-sm text-gray-500">{profileData.email}</p>
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
              value={profileData.name}
              onChange={(e) => setProfileData((prev) => ({ ...prev, name: e.target.value }))}
              className="text-right outline-none"
            />
          ) : (
            <span className="text-gray-800">{profileData.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Email</span>
          <span className="text-gray-800">{profileData.email}</span>
        </div>

        {/* Degree */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Degree</span>
          {isEdit ? (
            <input
              type="text"
              value={profileData.degree}
              onChange={(e) => setProfileData((prev) => ({ ...prev, degree: e.target.value }))}
              className="text-right outline-none"
            />
          ) : (
            <span className="text-gray-800">{profileData.degree}</span>
          )}
        </div>

        {/* Speciality */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Speciality</span>
          {isEdit ? (
            <input
              type="text"
              value={profileData.speciality}
              onChange={(e) => setProfileData((prev) => ({ ...prev, speciality: e.target.value }))}
              className="text-right outline-none"
            />
          ) : (
            <span className="text-gray-800">{profileData.speciality}</span>
          )}
        </div>

        {/* Experience */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Experience</span>
          {isEdit ? (
            <input
              type="text"
              value={profileData.experience}
              onChange={(e) => setProfileData((prev) => ({ ...prev, experience: e.target.value }))}
              className="text-right outline-none"
            />
          ) : (
            <span className="text-gray-800">{profileData.experience}</span>
          )}
        </div>

        {/* About */}
        <div className="border-b pb-2">
          <span className="text-gray-600 block">About</span>
          {isEdit ? (
            <textarea
              value={profileData.about}
              onChange={(e) => setProfileData((prev) => ({ ...prev, about: e.target.value }))}
              rows={3}
              className="w-full outline-none bg-gray-50 mt-1"
            />
          ) : (
            <p className="text-gray-800 mt-1">{profileData.about}</p>
          )}
        </div>

        {/* Fees */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-gray-600">Appointment Fee</span>
          {isEdit ? (
            <input
              type="number"
              value={profileData.fees}
              onChange={(e) => setProfileData((prev) => ({ ...prev, fees: e.target.value }))}
              className="text-right outline-none"
            />
          ) : (
            <span className="text-gray-800">
              {currency} {profileData.fees}
            </span>
          )}
        </div>

        {/* Address */}
        <div className="border-b pb-2">
          <span className="text-gray-600 block">Address</span>
          {isEdit ? (
            <input
              type="text"
              value={profileData.address || ''}
              onChange={(e) => setProfileData((prev) => ({ ...prev, address: e.target.value }))}
              className="w-full outline-none bg-gray-50"
            />
          ) : (
            <p className="text-gray-800 mt-1">{profileData.address || "No address provided"}</p>
          )}
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={profileData.available}
            onChange={() =>
              isEdit && setProfileData((prev) => ({ ...prev, available: !prev.available }))
            }
          />
          <label className="text-sm text-gray-600">Available</label>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 text-center">
        {isEdit ? (
          <button
            onClick={updateProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
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

export default DoctorProfile;

