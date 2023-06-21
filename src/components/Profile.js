import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reservedRocket } from '../redux/rockets/rocketsSlice';
import './style/Profile.css';

export default function Profile() {
  const dispatch = useDispatch();

  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(reservedRocket());
  }, [dispatch]);
  return (
    <>
      <div className="profile">
        <div className="dimension">
          <h2>My Missions</h2>
          <p className="profile-rockets">Mission list goes here</p>
          <p className="profile-rockets">Mission list goes here</p>
          <p className="profile-rockets">Mission list goes here</p>
        </div>
        <div className="dimension">
          <h2>My Missions</h2>

          {Object.entries(rockets).map(([id, rocket]) => (
            <div key={id} className="profile-rockets">
              <div>
                <p>{rocket.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
