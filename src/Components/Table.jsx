import React from 'react';
import '../Css/Table.css';

const NutritionTable = ({ data }) => {
  return (
    <table className='table'>
      <thead className='thead'>
        <tr className='table'>
          <th className='th'>Nutrient</th>
          <th className='th'>Amount per serving</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        <tr>
          <td>Calories</td>
          <td>{data.calories} kcal</td>
        </tr>
        <tr>
          <td>Total fat</td>
          <td>{data.totalFat} g</td>
        </tr>
        <tr>
          <td>Saturated fat</td>
          <td>{data.saturatedFat} g</td>
        </tr>
        <tr>
          <td>Trans fat</td>
          <td>{data.transFat} g</td>
        </tr>
        <tr>
          <td>Cholesterol</td>
          <td>{data.cholesterol} mg</td>
        </tr>
        <tr>
          <td>Sodium</td>
          <td>{data.sodium} mg</td>
        </tr>
        <tr>
          <td>Total carbohydrate</td>
          <td>{data.totalCarbohydrate} g</td>
        </tr>
        <tr>
          <td>Dietary fiber</td>
          <td>{data.dietaryFiber} g</td>
        </tr>
        <tr>
          <td>Sugars</td>
          <td>{data.sugars} g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>{data.protein} g</td>
        </tr>
        <tr>
          <td>Vitamin A</td>
          <td>{data.vitaminA} %</td>
        </tr>
        <tr>
          <td>Vitamin C</td>
          <td>{data.vitaminC} %</td>
        </tr>
        <tr>
          <td>Calcium</td>
          <td>{data.calcium} %</td>
        </tr>
        <tr>
          <td>Iron</td>
          <td>{data.iron} %</td>
        </tr>
      </tbody>
    </table>
  );
};

export default NutritionTable;
