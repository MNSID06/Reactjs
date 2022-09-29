import React, { Component } from "react";
import "./Job.css";



class Job extends Component {

  render() {
  return (
    
      <div className ="Job">
       <h1> Job Requirment Application</h1> <br />
        <p>Name : React Developer</p><br />
       <p> Description: Need a candidate to design,develope web applications for the comany.</p> <br />
        Technologies: HTML,CSS,Javascript,React.js
        <br />


<form>
<div>
<h2>Fill The Applicant's Form</h2>
<label>Job Code</label> 
<input type="text" /> <br />
<label>Applicant's Name </label>
<input type="text" /><br />
<label>Notes</label>
<textarea value="" /> <br />
<label>Technologies</label> 
<textarea value="" /><br />
<label>Notice Period</label>
<input type="text" /> <br />
<label>Salary asked</label> 
<input type="text" /><br />

<img src="https://qrtag.net/api/qr_4.png?url=https://www.qrtag.net" alt="qrtag"></img>
</div>
</form>
<button type="submit">Submit</button>
    </div>

  );
}
}

export default Job;