import React from 'react'
import { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const DoctorAppointments = () => {

  const { dToken, appointments, getAppointments, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])

  // are you sure you want to cancel appointment page(sweetalert2)
  const handleCancelClick = (appointmentId, cancelAppointment) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to cancel this appointment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        cancelAppointment(appointmentId);
        Swal.fire('Cancelled!', 'The appointment has been cancelled.', 'success');
      }
    });
  };

  // Function to Handle Join meeting link
      const handleJoinMeet = async(appointmentId) => {
          try{
              const backendUrl = import.meta.env.VITE_BACKEND_URL
              const { data } = await axios.post(backendUrl + '/api/doctor/join-meet', {appointmentId} , {headers: {dToken}} )
              
              const roomid = data?.roomId;
  
              if (roomid) {
              navigate(`/room/${roomid}`);
              } else {
                console.log("roomid: ",roomid)
              toast.error("Room ID not found.");
              }
              
          } catch (error) {
              console.log(error)
             toast.error(error.message)
          }
      }

  return (
    <div className='w-full max-w-6xl m-5 '>

      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointments.map((item, index) => (
          <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' key={index}>
            <p className='max-sm:hidden'>{index+1}</p>
            <div className='flex items-center gap-2'>
              <img src={item.userData.image} className='w-8 rounded-full object-cover object-top' alt="" /> <p>{item.userData.name}</p>
            </div>
            <div>
              <p className='text-xs inline border border-primary px-2 rounded-full'>
                {item.cancelled? 'NA' : item.payment?'Online':'CASH'}
              </p>
            </div>
            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <p>{currency}{item.amount}</p>
            {item.cancelled
              ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
              : item.isCompleted
                ? <p className='text-green-500 text-xs font-medium'>Completed</p>:
                <div className='text-center'>
              <div className='flex flex-col gap-2'>
                <div className='flex gap2'>
                  <img onClick={() => handleCancelClick(item._id,cancelAppointment)} className='w-8 cursor-pointer' src={assets.cancel_icon} alt="Cancel" />
                  <img onClick={() => completeAppointment(item._id)} className='w-8 cursor-pointer' src={assets.tick_icon} alt="Complete" />
                </div>
                {item.payment && <button onClick ={() => handleJoinMeet(item._id)} className='text-[#0a0a0a] text-xs px-3 py-1 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Join Meeting</button>}
              </div>
                 </div>
            }
          </div>
        ))}
      </div>

    </div>
  )
}

export default DoctorAppointments