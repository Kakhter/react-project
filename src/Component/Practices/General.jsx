
import React, {useState} from 'react'




const General = () => {
       const options = ["Apple", "Banana", "Orange"];
        const [selectedValue, setSelectedValue] = useState("");
       const options2 = ["Apple2", "Banana2", "Orange2"];
        const [selectedValue2, setSelectedValue2] = useState("");

            const users = [
                { name: "Alice", age: 25, email: "alice@example.com" },
                { name: "Bob", age: 30, email: "bob@example.com" }
              ];

              const countryStateData = {
                India: ["Karnataka", "Maharashtra", "Tamil Nadu"],
                USA: ["California", "Texas", "New York"],
                Canada: ["Ontario", "Quebec", "British Columbia"],
              };

const [selectedCountry, setSelectedCountry] = useState("");
const [states, setStates] = useState([]);

const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(countryStateData[country] || []);
};
 


              return (
                <>
                <div>
                  <h3>Select a Fruit:</h3>
                  {options.map((item, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name='first'
                        value={item}
                        checked={selectedValue === item}
                        onChange={(e) => setSelectedValue(e.target.value)}
                      />
                      {item}
                    </label>
                  ))}
                  <p>Selected: {selectedValue}</p>
                </div>

                <div>
                  <h3>Select a Fruit2:</h3>
                  {options2.map((item, index) => (
                    <label key={index} style={{ display: "block" }}>
                      <input
                        type="radio"
                        name='second'
                        value={item}
                        checked={selectedValue2 === item}
                        onChange={(e) => setSelectedValue2(e.target.value)}
                      />
                      {item} {index}
                    </label>
                  ))}
                  
                   <p>Selected2: {selectedValue2}</p>
                </div>

                <br/>

                <div>
                  <h3>User List:</h3>
                  {users.map((user, index) => (
                    <div key={index}>
                      <p>Name: {user.name}</p>
                      <p>Age: {user.age}</p>
                      <p>Email: {user.email}</p>
                      <hr />
                    </div>
                  ))}
                </div>

                <br/>
 


              
                  <div>
                        <h3>Select Country and State</h3>
                        <select onChange={handleCountryChange} value={selectedCountry}>
                        <option value="">-- Select Country --</option>
                        {Object.keys(countryStateData).map((country) => (
                            <option key={country} value={country}>
                            {country}
                            </option>
                        ))}
                        </select>

                        <select disabled={!selectedCountry}>
                        <option value="">-- Select State --</option>
                        {states.map((state) => (
                            <option key={state} value={state}>
                            {state}
                            </option>
                                ))}
                        </select>
                  </div>
   
<br/>
<br/>


                </>

                
              );
 
}

export default General