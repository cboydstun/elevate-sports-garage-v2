import { React, useState, useEffect } from "react";
import { getHours, updateHours } from "../../api/HoursApi";

export default function AdminHours() {
  const [hours, setHours] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [updatedHours, setUpdatedHours] = useState({});

  useEffect(() => {
    const fetchHours = async () => {
      const data = await getHours();
      setHours(data);
      console.log(data);
    };
    fetchHours();
  }, []);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e, day) => {
    setUpdatedHours({
      ...updatedHours,
      [day]: e.target.value,
    });
  };

  const handleSaveClick = async () => {
    const newHours = hours.map((hour) => ({
      ...hour,
      ...updatedHours,
    }));
    console.log(newHours[0]);
    const newUpdatedHours = await updateHours(newHours[0]);
    setEditMode(false);
    // Update the state to reflect the saved hours

    setHours([newUpdatedHours]);
  };

  return (
    <div className="hours">
      <ul>
        {hours.map((hour) => {
          return (
            <li key={hour._id}>
              <div>
                Monday:{" "}
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={hour.monday}
                    onChange={(e) => handleInputChange(e, "monday")}
                  />
                ) : (
                  hour.monday
                )}
              </div>
              <div>
                Tuesday:{" "}
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={hour.tuesday}
                    onChange={(e) => handleInputChange(e, "tuesday")}
                  />
                ) : (
                  hour.tuesday
                )}
              </div>
              <div>
                Wednesday:{" "}
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={hour.wednesday}
                    onChange={(e) => handleInputChange(e, "wednesday")}
                  />
                ) : (
                  hour.wednesday
                )}
              </div>
              <div>
                Thursday:{" "}
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={hour.thursday}
                    onChange={(e) => handleInputChange(e, "thursday")}
                  />
                ) : (
                  hour.thursday
                )}
              </div>
              <div>
                Friday:{" "}
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={hour.friday}
                    onChange={(e) => handleInputChange(e, "friday")}
                  />
                ) : (
                  hour.friday
                )}
              </div>
              <div>
                Saturday:{" "}
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={hour.saturday}
                    onChange={(e) => handleInputChange(e, "saturday")}
                  />
                ) : (
                  hour.saturday
                )}
              </div>
              <div>
                Sunday:{" "}
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={hour.sunday}
                    onChange={(e) => handleInputChange(e, "sunday")}
                  />
                ) : (
                  hour.sunday
                )}
              </div>
              <div>
                Holiday or exceptions:{" "}
                {editMode ? (
                  <input
                    type="text"
                    defaultValue={hour.holiday}
                    onChange={(e) => handleInputChange(e, "holiday")}
                  />
                ) : (
                  hour.holiday
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={handleEditClick}>
        {editMode ? "Cancel" : "Update"}
      </button>
      {editMode && <button onClick={handleSaveClick}>Save Changes</button>}
    </div>
  );
}
