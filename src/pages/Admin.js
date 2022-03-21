import React from 'react';
import Header from '../components/Header.js';
import Piet from '../components/Piet.js';

export default function Admin() {
  return (
    <>
      <Header />
      <main className="text-center bg-teal-n text-pistachio-n">
        <h1>thanks for your HELP</h1>
        <p>current inner window width {window.innerWidth}px</p>
      </main>
      <Piet />
    </>


    // {/* <main className="flex">
    //   <h2 className="m-10 font-semibold mx-auto text-xl ">Admin Page</h2>
    // </main> */}
  );
}