import React from 'react';
import Layout from '../components/Layout';
import MenuItem from '../components/MenuItem';

const Menu = () => (
  <Layout>

  <div class = "Reyes">
    <h1>Reyes Restaurant</h1>

    </div>

    <div className = "sub_heading">
    <h2> Domincian Style Food(Comida Estilo Dominicano) </h2>

    </div>

<div className = "sub_heads_2">
    <p> Breakfast Latino </p>

</div>

    <ul>

      <li> <button> Mongo ( Mushed Plaintains)   </button> </li>
      <ul>
        <li> Chicken (De Pollo) </li>
        <li> Beef (De Carne) </li>
        <li> Grilled Chicken </li>
      </ul>


          <li><button> Fried Eggs </button>  </li>
    </ul>

<p> Dinner Latin Style (Sena estilo Dominicano)</p>

  <ul>
      <li> <button> Roast Pork Shoulder (Pernil) </button> </li>
      <li> <button> Fried Chicken ( Pollo Frito) </button> </li>
      <li> <button> Yellow Rice with Vegtables (Arroz Amarillo) </button> </li>
      <li> <button> White Rice( Arroz Blanco) </button> </li>


  </ul>

  </Layout>
);

export default Menu;
