import React from 'react'

function Welcome(Props) {
    return (
        <div>
            <p align="center"> {Props.name}
            USN{Props.usn}
            Email{Props.email}
            </p>
        </div>
    )
}
 function Props() {
  return (
    <div>
        <Welcome name="pajju" usn="19" email="prasush19gmail.com" />
        <NavBar />
    </div>
  )
}
export default Props