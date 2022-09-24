import React, { useState } from "react"; 

function Form() {
  const [name, setName] = useState('prajju');
  const [email, setEmail]=useState('prasush192@gmail.com');
  const [phoneno, setPhoneno] = useState('2341234');
  const [branch, setBranch] = useState('ece');
  const [usn, setUsn] = useState('4mk19ec01');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      name: name,
      email: email,
      phoneno: phoneno,
      branch: branch,
      usn: usn
    }

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="student name" onChange={(e) => setName(e.target.value)} /><br></br>
        <input type="text" value={email} placeholder="student email" onChange={(e) => setEmail(e.target.value)} /><br></br>
        <input type="text" value={phoneno} placeholder="student phoneno" onChange={(e) => setPhoneno(e.target.value)} /><br></br>
        <input type="text" value={branch} placeholder="student branch" onChange={(e) => setBranch(e.target.value)} /><br></br>
        <input type="text" value={usn} placeholder="student usn" onChange={(e) => setUsn(e.target.value)} /><br></br>
        <input type="submit" value="submit"></input>
      </form>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phoneno}</p>
      <p>{branch}</p>
      <p>{usn}</p>
       </div>
  )
}
export default Form