import React from 'react';
import Layout from './component/layout';
import Button from './component/button';
import "./style/style.css"

function App() {
  return (
    <React.Fragment>
      <h1>belajar props 2</h1>
      <Layout title={'nomor 1'}>
        <h1>SMK Madinatul Quran</h1>
      </Layout>
      <Layout title={'nomor 1'}>
        <h1>SMK Madinatul Quran</h1>
      </Layout>
      <Layout title={'nomor 1'}>
        <h1>SMK Madinatul Quran</h1>
      </Layout>
      <Button onClick={() => {
        console.log("button ini diklik");
      }} color='blue' title='simpan' />
      <Button onClick={() => {
        console.log("button batal diklik");
      }} disalbled={true} title='batal' />
      <Button color='green' title='update' />
    </React.Fragment>
  );
}

export default App;