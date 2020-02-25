import React from 'react';
import './App.css';
import Title from './Title.PNG'

function App() {
  return (
    <div className="App">
      <div className="Title">
        <div className="banner">
            <img alt="AWS Logo" src={Title}/>
        </div>
        
      </div>
      <div classname="main">
        <h1>Session Schedule</h1>
        <table>
          <tr><th>Date</th><th>Title</th><th>Speaker(s)</th><th>Summary</th></tr>
          <tr><td>03/05/2020</td><td>Aurora</td><td>Gowri</td><td>Lorem ipsum dolor sit amet, an omnis quando primis usu, erroribus torquatos ea mel. At ludus vitae essent eos, at error convenire posidonium mei. Cum tation fabellas ne. Sed nostro aperiam ea, ex per audiam eligendi. Eos homero legimus omittantur te. Duo ut duis accommodare, mea essent offendit intellegam ei, mel harum consul eirmod ne.t</td></tr>
          <tr><td>03/19/2020</td><td>Cost Optimization</td><td>Expedia Team</td><td>Lorem ipsum dolor sit amet, an omnis quando primis usu, erroribus torquatos ea mel. At ludus vitae essent eos, at error convenire posidonium mei. Cum tation fabellas ne. Sed nostro aperiam ea, ex per audiam eligendi. Eos homero legimus omittantur te. Duo ut duis accommodare, mea essent offendit intellegam ei, mel harum consul eirmod ne.</td></tr>
          <tr><td>04/02/2020</td><td>Redshift</td><td>TBD</td><td>Lorem ipsum dolor sit amet, an omnis quando primis usu, erroribus torquatos ea mel. At ludus vitae essent eos, at error convenire posidonium mei. Cum tation fabellas ne. Sed nostro aperiam ea, ex per audiam eligendi. Eos homero legimus omittantur te. Duo ut duis accommodare, mea essent offendit intellegam ei, mel harum consul eirmod ne.</td></tr>
          <tr><td>04/16/2020</td><td>VPC Networking & Private Link</td><td>Bhavin Desai</td><td>Lorem ipsum dolor sit amet, an omnis quando primis usu, erroribus torquatos ea mel. At ludus vitae essent eos, at error convenire posidonium mei. Cum tation fabellas ne. Sed nostro aperiam ea, ex per audiam eligendi. Eos homero legimus omittantur te. Duo ut duis accommodare, mea essent offendit intellegam ei, mel harum consul eirmod ne.</td></tr>
          <tr><td>04/30/2020</td><td>DynamoDB</td><td>Edin Zulich</td><td>Lorem ipsum dolor sit amet, an omnis quando primis usu, erroribus torquatos ea mel. At ludus vitae essent eos, at error convenire posidonium mei. Cum tation fabellas ne. Sed nostro aperiam ea, ex per audiam eligendi. Eos homero legimus omittantur te. Duo ut duis accommodare, mea essent offendit intellegam ei, mel harum consul eirmod ne.</td></tr>
          <tr><td>05/14/2020</td><td>IAM & S3 Access Policies</td><td>TBD</td><td>Lorem ipsum dolor sit amet, an omnis quando primis usu, erroribus torquatos ea mel. At ludus vitae essent eos, at error convenire posidonium mei. Cum tation fabellas ne. Sed nostro aperiam ea, ex per audiam eligendi. Eos homero legimus omittantur te. Duo ut duis accommodare, mea essent offendit intellegam ei, mel harum consul eirmod ne.</td></tr>
          <tr><td>05/28/2020</td><td>Containers</td><td>Brian Hammons & Ben Fields</td><td>Lorem ipsum dolor sit amet, an omnis quando primis usu, erroribus torquatos ea mel. At ludus vitae essent eos, at error convenire posidonium mei. Cum tation fabellas ne. Sed nostro aperiam ea, ex per audiam eligendi. Eos homero legimus omittantur te. Duo ut duis accommodare, mea essent offendit intellegam ei, mel harum consul eirmod ne.</td></tr>
          <tr><td>06/11/2020</td><td>Resiliancy</td><td>Gowri</td><td>Lorem ipsum dolor sit amet, an omnis quando primis usu, erroribus torquatos ea mel. At ludus vitae essent eos, at error convenire posidonium mei. Cum tation fabellas ne. Sed nostro aperiam ea, ex per audiam eligendi. Eos homero legimus omittantur te. Duo ut duis accommodare, mea essent offendit intellegam ei, mel harum consul eirmod ne.</td></tr>
          <tr><td>06/25/2020</td><td>Serverless Analytics</td><td>Rajeev Srinivasan</td><td>Lorem ipsum dolor sit amet, an omnis quando primis usu, erroribus torquatos ea mel. At ludus vitae essent eos, at error convenire posidonium mei. Cum tation fabellas ne. Sed nostro aperiam ea, ex per audiam eligendi. Eos homero legimus omittantur te. Duo ut duis accommodare, mea essent offendit intellegam ei, mel harum consul eirmod ne.</td></tr>
        </table>
      </div>
      <h2>Contact us:</h2> 
      <h2>aws-expedia-team@amazon.com</h2>
      <br/><br/>
    </div>
  );
}

export default App;
