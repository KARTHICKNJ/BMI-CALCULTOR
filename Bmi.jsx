import React, { useState } from 'react';
import './Styles.css'

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');

  function calculateBmi() {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    let valid = true;

    // Reset error messages
    setWeightError('');
    setHeightError('');

    if (!weightNum || weightNum <= 0) {
      setWeightError("Please enter a valid weight");
      valid = false;
    }

    if (!heightNum || heightNum <= 0) {
      setHeightError("Please enter a valid height");
      valid = false;
    }

    if (!valid) return; // Exit if inputs are not valid

    const heightInMeter = heightNum / 100;
    const Bmivalue = weightNum / (heightInMeter * heightInMeter);
    setBmi(Bmivalue.toFixed(2));

    if (Bmivalue < 18.5) {
      setBmiStatus("Underweight");
    } else if (Bmivalue >= 18.5 && Bmivalue < 25) {
      setBmiStatus("Normal weight");
    } else if (Bmivalue >= 25 && Bmivalue < 30) {
      setBmiStatus("Overweight");
    } else {
      setBmiStatus("Obese");
    }

    // Clear input fields
    setHeight('');
    setWeight('');
  }

  return (
    <>
      <div className="container">
        <h1 className='text-success mb-4'>BMI CALCULATOR</h1>
        <div className='my-3'>
          <label htmlFor="">WEIGHT IN (KG):</label>
          <input 
            type="text" 
            placeholder='WEIGHT IN KG' 
            onChange={(e) => setWeight(e.target.value)} 
            value={weight}
          />
          <p className='text-danger'>{weightError}</p>
        </div>
        <div className='my-3'>
          <label htmlFor="">HEIGHT IN (CM):</label>
          <input 
            type="text" 
            placeholder='HEIGHT IN CM' 
            onChange={(e) => setHeight(e.target.value)} 
            value={height}
          />
          <p className='text-danger'>{heightError}</p>
        </div>
        <button className='btn btn-success' onClick={calculateBmi}>CALCULATE BMI</button>
        {bmi != null && (
          <div className='mt-4'>
            <h4>YOUR BMI VALUE IS: {bmi}</h4>
            <h4>YOUR BMI STATUS IS: {bmiStatus}</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Bmi;