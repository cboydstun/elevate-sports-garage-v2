import { React, useState, useEffect } from "react";
import { getHours,  } from "../../api/HoursApi";

export default function FooterHours() {
  const [hours, setHours] = useState([]);

 

  useEffect(() => {
    const fetchHours = async () => {
      const data = await getHours();
      setHours(data);
    
    };
    fetchHours();
  }, []);

  return (
    <div className="hours">
      <ul>
        {hours.map((hour) => {
          return (
            <li key={hour._id}>
              <div>
                Monday:{" "}{hour.monday}
              </div>
              <div>
                Tuesday:{" "}{ hour.tuesday}
              </div>
              <div>
                Wednesday:{" "}
                  {hour.wednesday}
              </div>
              <div>
                Thursday:{" "}
                  {hour.thursday}
                
              </div>
              <div>
                Friday:{" "}{hour.friday}
               
              </div>
              <div>
                Saturday:{" "}
                  {hour.saturday}             
              </div>
              <div>
                Sunday:{" "}{ hour.sunday}
             
              </div>
              <div>
                <br></br>
              {hour.holiday && (
                <div> {hour.holiday}</div>
              )}
                 
              </div>
            </li>
          );
        })}
      </ul>
     
    </div>
  );
}
