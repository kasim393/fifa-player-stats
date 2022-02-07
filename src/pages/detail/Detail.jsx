import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import data from "../../assets/data.json"; 
import Navbar from '../../components/navbar/Navbar';
import './detail.css'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const Detail = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [users, setUsers] = useState([])
  const [stats, setStats] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
      const loadUsers = async() => {
        setUsers(data.data)
      }
      loadUsers()
  }, [])

  useEffect(() => {
    data.data.map((user) => {
      if(user.ID == path){
        setStats([user.Crossing /100,user.Finishing/100,user.ShortPassing /100,user.Volleys/100,user.HeadingAccuracy/100]);
        }
       })
  }, [])
  
  const dataa =  [
    {
      data: {
      crossing:stats[0],
      finishing:stats[1],
      short:stats[2],
      volleys:stats[3],
      head:stats[4],
      },
      meta: { color: 'blue' }
    },
  ];
  const captions = {
      // columns
      crossing: 'Crossing',
      finishing: 'Finishing',
      short: 'Short Passing',
      volleys: 'Volleys',
      head: 'Head Accuracy'
    };


  return <div>
    <Navbar />
    {users.map((user)=>(
      <>
      {user.ID == path &&(
        <>
        <div className='detail'>
          <div className="chart scale-in-center">
             <RadarChart
              captions={captions}
              data={dataa}
              size={300}
            />
          </div>
          <div className="stats scale-in-center">
            <div className="stats-card">
              <div className="card">
                <div className="card-top">
                  <div className="card-two-col">
                    <div className="img-col">
                      <p>{user.Overall}</p>
                      <p>{user.Position}</p>
                      <img src={user.Flag} alt="" />
                      <img src={user.Club_Logo} alt="" />
                    </div>
                    <div className="img-single">
                      <img src={user.Photo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="card-bottom">
                  <div>
                    <h3>{user.Name}</h3>
                  </div>
                  <div>
                    <p>Age</p> <span>{user.Age}</span>
                  </div>
                  <div>
                    <p>Value</p> <span>{user.Value}</span>
                  </div>
                  <div>
                    <p>Height</p> <span>{user.Height}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats-info">
             
              <div>
                <p>Weight</p>
                <span>{user.Weight}</span>
              </div>
              <div>
                <p>Preferred Foot</p>
                <span>{user.Preferred_Foot}</span>
              </div>
              <div>
                <p>Jersey Number</p>
                <span>{user.Jersey_Number}</span>
              </div>
              <div>
                <p>Work Rate</p>
                <span>{user.Work_Rate}</span>
              </div>
              <div>
                <p>Wage</p>
                <span>{user.Wage}</span>
              </div>
              <div>
                <p>Joined</p>
                <span>{user.Joined}</span>
              </div>
              <div>
                <p>Contract Value till</p>
                <span>{user.Contract_Valid_Until}</span>
              </div>
            </div>
          </div>
        </div> 
        </>
        )}
      </>
    ))}
  </div>;
};

export default Detail;
