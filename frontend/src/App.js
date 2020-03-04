import React from 'react';
import './App.css';
import Title from './Title.PNG'



class App extends React.Component {
  state = {
    showPrompt:"none",
    message:"Thank you. Your attendance has been recorded."
    
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    
  }

  addAttendance = (title,id) => {
    this.showPrompt();
  }

  showPrompt = () => {
    this.setState({showPrompt:"block"});
  }
  hidePrompt = () => {
    this.setState({showPrompt:"none"});
  }

  render() {
    
    return (
      <div className="App">
      <div className="Title">
        <div className="banner">
            <img alt="AWS Logo" src={Title}/>
        </div>
        
      </div>
      <div className="main">
        <h1>Session Schedule</h1>
        <table>
          <thead>
            <tr><th>Date</th><th>Title</th><th>Speaker(s)</th><th>Summary</th><th></th></tr>
          </thead>
          <tbody>
          <tr className="row">
            <td>03/05/2020</td>
            <td>Aurora</td>
            <td>Gowri</td>
            <td>This session will discuse Aurora architectural patterns and best practices.</td>
            <td className="attendButtonColumn"><button className="attendButton" onClick = {()=>{this.addAttendance("Aurora",1)}}>Attend</button></td>
          </tr>
          <tr className="row">
            <td>03/19/2020</td>
            <td>Cost Optimization</td>
            <td>Expedia Team</td>
            <td>This session will provide a deep dive from your AWS account team to share where there are opportunities for cost savings within your AWS accounts.</td>
            <td className="attendButtonColumn"><button className="attendButton" onClick = {()=>{this.addAttendance("Aurora",1)}}>Attend</button></td>
          </tr>
          <tr className="row">
            <td>04/02/2020</td>
            <td>Redshift</td>
            <td>TBD</td>
            <td>In this session, learn how to leverage Redshift for your datawarehousing projects</td>
            <td className="attendButtonColumn"><button className="attendButton" onClick = {()=>{this.addAttendance("Aurora",1)}}>Attend</button></td>
          </tr>
          <tr className="row">
            <td>04/16/2020</td>
            <td>VPC Networking & Private Link</td>
            <td>Bhavin Desai</td>
            <td>This session will provide guidance on how to effectively manage your VPC's and integrate them with your existing infrastructure</td>
            <td className="attendButtonColumn"><button className="attendButton" onClick = {()=>{this.addAttendance("Aurora",1)}}>Attend</button></td>
          </tr>
          <tr className="row">
            <td>04/30/2020</td>
            <td>DynamoDB</td>
            <td>Edin Zulich</td>
            <td>This session will cover the distinction between NoSQL and SQL and what use cases are appropriate for DynamoDB. We will also cover common query patterns and partitioning strategies</td>
            <td className="attendButtonColumn"><button className="attendButton" onClick = {()=>{this.addAttendance("Aurora",1)}}>Attend</button></td>
          </tr>
          <tr className="row">
            <td>05/14/2020</td>
            <td>IAM & S3 Access Policies</td>
            <td>TBD</td>
            <td>This session will explain how to setup IAM policies across accounts and integrate them with S3 for cross account or same account access patterns.</td>
            <td className="attendButtonColumn"><button className="attendButton" onClick = {()=>{this.addAttendance("Aurora",1)}}>Attend</button></td>
          </tr>
          <tr className="row">
            <td>05/28/2020</td>
            <td>Containers</td>
            <td>Brian Hammons & Ben Fields</td>
            <td>This session will cover the uses of ECS, EKS, as well as recent developments with Fargate. We will also cover how you can use AppMesh to provide a uniform networking layer across all your services.</td>
            <td className="attendButtonColumn"><button className="attendButton" onClick = {()=>{this.addAttendance("Aurora",1)}}>Attend</button></td>
          </tr>
          <tr className="row">
            <td>06/11/2020</td>
            <td>Resiliancy</td>
            <td>Gowri</td>
            <td>This session will focus on how to architect highly available and fault tolerant distributed systems in AWS.</td>
            <td className="attendButtonColumn"><button className="attendButton" onClick = {()=>{this.addAttendance("Aurora",1)}}>Attend</button></td>
          </tr>
          <tr className="row">
            <td>06/25/2020</td>
            <td>Serverless Analytics</td>
            <td>Rajeev Srinivasan</td>
            <td>Learn how to build a serverless system using Lambda, API Gateway, Kinisis and more. </td>
            <td className="attendButtonColumn"><button className="attendButton" onClick = {()=>{this.addAttendance("Aurora",1)}}>Attend</button></td>
          </tr>
            </tbody>
        </table>
      </div>
      <h2>Contact us:</h2> 
      <h2>aws-expedia-team@amazon.com</h2>
      <br/><br/>
      <div className="MessageBackground" ref = {this.promptWindow} style={{display:this.state.showPrompt}}>
        <div className="MessageBox">
          <div className="messageText">
            {
              this.state.message
            }
          </div>
          <button className="promptButton" onClick={this.hidePrompt}>Close</button>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
