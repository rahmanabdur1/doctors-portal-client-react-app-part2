import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png';
import PrivateButton from '../../Components/PrivateButton/PrivateButton';
const MakeAppointment = () => {
    return (
        <section className='mt-32'>
            <div className="hero" style={{ backgroundImage: `url(${appointment})` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" -mt-32 hidden md:block lg:block lg:w-1/2 rounded-lg shadow-lg " alt='' />
                    <div className='lg:w-1/3'>
                        <h4 className="text-5xl text-primary font-bold">Appointment</h4>
                        <h1 className='text-4xl font-bold text-white'>Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrivateButton>Make Appointment</PrivateButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;