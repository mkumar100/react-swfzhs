import React from 'react';
import './style.css';

export default function App() {
  let num1 = null;
  let num2 = null;

  const handleClick = (event) => {
    console.log(event.target.getAttribute('value'));
    if ((num1 = null)) {
      num1 = event.target.value;
      //console.log(num1);
    }
  };

  return (
    <>
      <div>
        <h1>Calculator</h1>
      </div>
      <div className="screen"></div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <div className="button">#</div>
              </td>
              <td>
                <div className="button">#</div>
              </td>
              <td>
                <div className="button">#</div>
              </td>
              <td>
                <div className="button">/</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="button">7</div>
              </td>
              <td>
                <div className="button">8</div>
              </td>
              <td>
                <div className="button">9</div>
              </td>
              <td>
                <div className="button">*</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="button">4</div>
              </td>
              <td>
                <div className="button">5</div>
              </td>
              <td>
                <div className="button">6</div>
              </td>
              <td>
                <div className="button">-</div>
              </td>
            </tr>
            <tr>
              <td>
                <div value={1} className="button" onClick={handleClick}>
                  1
                </div>
              </td>
              <td>
                <div className="button">2</div>
              </td>
              <td>
                <div className="button">3</div>
              </td>
              <td>
                <div className="button">+</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="button">#</div>
              </td>
              <td>
                <div className="button">0</div>
              </td>
              <td>
                <div className="button">.</div>
              </td>
              <td>
                <div className="button">=</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
