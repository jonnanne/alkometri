import { useState } from 'react';
import './App.css';


function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] =useState(0)
  const [gender, setGender] = useState("male")
  const [time, setTime] = useState(0)
  const [alcoholLevel, setAlcoholLevel] = useState(0)


  const calculate = (e) => {
    e.preventDefault()

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)

    let result = 0

    if (gender === "male") {
      result = gramsLeft/(weight * 0.7)
    }
    else {result = gramsLeft/(weight * 0.6)}

    if (result < 0) {result = 0}

    setAlcoholLevel(result.toFixed(2))
  
}

  return (

    <div style={{margin: "25px", fontWeight: "bold"}}>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit = {calculate}>
      <div>
      <label style={{marginRight: "5px"}}>Weight:</label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label style={{marginRight: "5px"}}>Bottles:</label>
        <select value={bottles} onChange={e =>setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <label style={{marginRight: "5px"}}>Time:</label>
        <select value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" name= "gender" value="male" onChange={e=> setGender(e.target.value)} defaultChecked/><label>Male</label>
        <input type="radio" name= "gender" value="female" onChange={e=> setGender(e.target.value)}/><label>Female</label>
      </div>

      <div>
        <button style= {{marginTop:"15px", marginBottom:"15px"}}>Calculate!</button>
      </div>
      <div>
        <output style={{fontSize: "25px"}}>{alcoholLevel}</output>
      </div>

      </form>
      </div>

  );
}

export default App;
