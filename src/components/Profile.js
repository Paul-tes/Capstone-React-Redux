import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reservedRocket } from '../redux/rockets/rocketsSlice';
import { joindedMissions } from '../redux/missions/missionSlice';
import './style/Profile.css';

export default function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(joindedMissions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(reservedRocket());
  }, [dispatch]);

  const { rockets } = useSelector((state) => state.rockets);

  const { data } = useSelector((state) => state.missions);

  return (
    <>
      <div className="profile">
        <div className="dimension">
          <h2>My Missions</h2>
          {
            Object.entries(data).map(([id, mission]) => (
              <p key={id} className="profile-rockets">
                {mission.mission_name}
              </p>
            ))
          }
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
