import React, { useEffect } from 'react';
import './style/Mission.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission } from '../redux/missions/missionSlice';

export default function Missions() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <div>
      <table className="mission-table">
        <thead className="mission-t-head">
          <tr className="mission-t-row">
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {status === 'idle' && <tr>Loadding.....</tr>}
          {status === 'suceeded'
            && data.map((mission) => (
              <tr key={mission.mission_id} id={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>
                  {mission.description}
                </td>
                <td><button type="button">Note A Menber</button></td>
                <td><button type="button">Join Mission</button></td>
              </tr>
            ))}
          {error && <tr>Error fetching data</tr>}
        </tbody>
      </table>
    </div>
  );
}
