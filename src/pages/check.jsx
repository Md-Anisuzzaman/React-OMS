import { useState } from "react";

const Check = () => {
    const [data, setData] = useState({});

    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Access the values from 'data' state
        console.log("Form data:", data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username" // Specify the name for each input
                    id="username"
                    onChange={handleOnChange}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleOnChange}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleOnChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Check;
