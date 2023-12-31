import React from 'react';

const Reviews = ({ review }) => {
    const { name, img, userReview, location } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="card-actions items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg'>{name}</h5>
                        <p> {location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;