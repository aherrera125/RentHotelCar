import { useRef, useState } from 'react';
import Component from '../../helpers/RentOperations'

const TypeRent = () => {
    const [days, setDays] = useState(0);
    const [option, setOption] = useState("Hotel");

    const [confirm, setConfirm] = useState(false);   

    const mailText = useRef();
    const userText = useRef();

    const selectHotelCar = (e) => {
        setOption(e.target.value);
    }

    const typeDays = (e) => {
        setDays(e.target.value);
    }

    const confirmRent = () => {
        const currentUserValue = userText.current.value;
        const currentEmailValue = mailText.current.value;
        if (currentUserValue && currentEmailValue) {
            setConfirm(true);
            console.log("User: " + currentUserValue + " - Email: " + currentEmailValue);
        } else {
            setConfirm(false);
            console.log("Please fill in both fields: User and Email");
        }

    };

    return (
        <div>
            <select onChange={selectHotelCar}>
                <option value="Hotel">Hotel</option>
                <option value="Car">Car</option>
            </select>&nbsp;
            <input type='text' onChange={typeDays} placeholder='Insert days amount' />
            {option === "Hotel" && <Component option={1} days={days} />}
            {option === "Car" && <Component option={2} days={days} />}

            <input type='text' ref={userText} placeholder='Insert user name' /><br></br>
            <input type='text' ref={mailText} placeholder='Insert email' /><br></br>

            <button onClick={confirmRent}>Confirm</button>
            {confirm && <p>Rent confirmed to: {userText.current.value}</p>}

        </div>
    );
}

export default TypeRent;