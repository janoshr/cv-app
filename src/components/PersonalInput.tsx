import React, { FormEvent, useState } from 'react'
import { ACTIONS, CV } from './Editor'
import InputField from './InputField';

export default function PersonalInput({ personal, dispatch }: any) {
  const [email, setEmail] = useState(personal.email ?? "");
  const [firstName, setFirstName] = useState(personal.firstName ?? "");
  const [lastName, setLastName] = useState(personal.lastName ?? "");
  const [tel, setTel] = useState(personal.tel ?? "")

  function handleSubmit(e: FormEvent) {
    dispatch({
      type: ACTIONS.UPDATE_PERSONAL, payload: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        tel: tel
      }
    })
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="row">
          <div className="col">
            <InputField
              data={{
                name: "first-name",
                id: "first-name",
                value: firstName,
                onChange: (e: any) => setFirstName(e.target.value)
              }}
              label={{ className: "input-group-text", name: "First Name" }}
            />
          </div>
          <div className="col">
            <InputField
              data={{
                name: "last-name",
                id: "last-name",
                value: lastName,
                onChange: (e: any) => setLastName(e.target.value) 
              }}
              label={{ className: "input-group-text", name: "Last Name" }}
            />
          </div>
        </div>
        <div className="mb-3">
          <InputField
            data={{
              type: "email",
              name: "email",
              id: "email",
              value: email,
              onChange: (e: any) => setEmail(e.target.value),
            }}
            label={{ name: "Email" }}
          />
        </div>
        <div className="mb-3">
          <InputField
            data={{
              name: "tel",
              id: "tel",
              value: tel,
              onChange: (e: any) => setTel(e.target.value)
            }}
            label={{ name: "Mobile Number" }}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary btn-block">Save</button>
        </div>
      </form>
    </div>
  )
}
