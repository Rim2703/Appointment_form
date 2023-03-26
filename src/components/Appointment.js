import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Appointment() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Appointment booked for ${name} on ${date} at ${time}`);

        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');


        axios.post('http://localhost:8000/appointments', {
            name,
            email,
            phone,
            date,
            time
          })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const timeSlots = [
        '9:00-10:00 AM',
        '10:00-11:00 AM',
        '11:00-12:00 PM',
        '12:00-1:00 PM',
        '1:00-2:00 PM',
        '2:00-3:00 PM',
        '3:00-4:00 PM',
        '4:00-5:00 PM',
    ];

    
    return (
        <div className="formInput">
            <h2>Book an Appointment</h2>
            <form className="form-container" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </label>

                <div>
                    <label>Select One:</label>
                    <select >
                        <option value="">Select a Person</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Techinal">Techinal</option>
                        <option value="Employee">Employee</option>
                    </select>
                </div>

                <label>
                    Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </label>

                <div>
                    <label htmlFor="time">Time:</label>
                    <select id="time" name="time" value={time} onChange={handleTimeChange}>
                        <option value="">Select a time slot</option>
                        {timeSlots.map((timeSlot) => (
                            <option key={timeSlot} value={timeSlot}>
                                {timeSlot}
                            </option>
                        ))}
                    </select>
                </div>

                <button disabled={email.length < 1} className="btn" type="submit" onClick={() => { alert("Your Appointment is scheduled") }}>Book Appointment</button>
            </form>
        </div>
    );
}

export default Appointment;


