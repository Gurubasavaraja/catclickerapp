import React, { useEffect } from 'react';
import './App.css';
import MainComponent from './MainComponent/MainComponent.jsx'
import sha256 from 'crypto-js/sha256';
var AES = require("crypto-js/aes");

// var CryptoJS = require("crypto-js");

// var canvas = document.querySelector("canvas")
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// var c = canvas.getContext("2d")
// function App() {

// var myString = "blablabla Card game bla";
// var myPassword = "myPassword";
// var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');

// // Decrypt
// var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
// var plaintext = bytes.toString(CryptoJS.enc.Utf8);

// console.log(plaintext);
// var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
// var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
// console.log("enc", encrypted)
// console.log("enc", decrypted)
// console.log("dec", encrypted)
// console.log("fina", decrypted.toString(CryptoJS.enc.Utf8))

// useEffect(() => {

//   c.fillStyle = "blue"
//   c.fillRect(100, 100, 100, 100)
//   c.fillStyle = "green"
//   c.fillRect(500, 100, 100, 100)
//   c.beginPath();
//   c.moveTo(50, 300)
//   c.lineTo(300, 100)
//   c.lineTo(500, 300)
//   c.strokeStyle = "black"
//   c.stroke()
//   // for (let index = 0; index < 30; index++) {
//   //   var x = Math.random() * window.innerWidth
//   //   var y = Math.random() * window.innerHeight
//   //   var st = Math.random() * 50000
//   //   c.beginPath()
//   //   c.arc(x, y, 30, Math.PI * 2, false)
//   //   c.strokeStyle = "red"
//   //   c.stroke()
//   // }
// }, [])


// var x = 200
// // useEffect(() => {

// // })
// var animate = () => {

//   requestAnimationFrame(animate)
//   c.clearRect(0, 0, window.innerHeight, window.innerWidth)
//   c.beginPath()

//   c.arc(x, 200, 200, 30, 0, Math.PI * 2, true)
//   c.strokeStyle = "red"
//   c.stroke()
//   x += 1



// }
// useEffect(() => { animate() })
// return (
//   <div className="App">
//     {/* <MainComponent /> */}
//     <canvas style={{ border: "9px solid black" }}></canvas>
//   </div>
// );
// }
function App() {
  return (
    <MainComponent />
  )
}
export default App;
