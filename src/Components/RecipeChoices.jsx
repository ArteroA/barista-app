import React, { Component, useEffect, useState } from "react";

// const RecipeChoices = ({ handleChange, label, choices, checked }) => {
//   return (
//     <div>
//       <div className="radio-buttons">
//         {choices &&
//           choices.map((choice) => (
//             <li key={choice}>
//               <input
//                 id={choice}
//                 value={choice}
//                 name={label}
//                 type="radio"
//                 onChange={handleChange}
//                 checked={checked == choice}
//               />
//               {choice}
//             </li>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeChoices;

const RecipeChoices = ({ handleChange, label, choices, checked, currentVal }) => {
  return (
    <div>
      <div className="radio-buttons">
        {choices &&
          choices.map((choice) => (
            <li key={choice}>
              
              {choice}
            </li>
          ))}
      </div>
      <div>
        <input
          type="text"
          name={label}
          value={currentVal}
          placeholder="Guess the ingredient..."
          onChange={handleChange}
          className="textbox"
        />
      </div>
    </div>
  );
};

export default RecipeChoices;