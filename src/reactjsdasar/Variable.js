import React from 'react'

// Const
// const harga = 3000;
// harga = 300;

// Var
// var harga = 2000;
// if(true){
//   var harga =3000;
// }

// Let
let harga = 2000;
if(true){
  harga =3000;
}

const Variable = () => {
  return (
    <div>
        <h2>Belajar variabel!</h2>
        <h4>Harga : {harga}</h4>
    </div>
  )
}

export default Variable