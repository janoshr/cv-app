import React, { FormEvent, useState } from 'react'
import { ACTIONS, CV } from './Editor'

export default function PersonalInput({ personal, dispatch }: any) {
  const [email, setEmail] = useState(personal.email ?? "");
  const [firstName, setFirstName] = useState(personal.firstName ?? "");
  const [lastName, setLastName] = useState(personal.lastName ?? "");
  const [tel, setTel] = useState(personal.tel ?? "")

  function handleSubmit(e:FormEvent){
    dispatch({type: ACTIONS.UPDATE_PERSONAL, payload: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      tel: tel
    }})
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="input-group mb-3">
          <label htmlFor="i-fname" className="input-group-text">First Name</label>
          <input
            type="text"
            name="name"
            id="i-fname"
            className="form-control"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor="i-lname" className="input-group-text">Last Name</label>
          <input
            type="text"
            name="name"
            id="i-lname"
            className="form-control"
            value={lastName}
            onChange={e => setLastName(e.target.value)}  
          />
        </div>
        <div className="mb-3">
          <label htmlFor="i-email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            id="i-email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="i-tel" className="form-label">Mobile number</label>
          <input
            type="text"
            name="tel"
            id="i-tel"
            className="form-control"
            value={tel}
            onChange={e => setTel(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary btn-block">Save</button>
        </div>
      </form>
    </div>
  )
}
