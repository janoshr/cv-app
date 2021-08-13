import React, { FormEvent, useState } from 'react'
import { Action, ACTIONS } from '../lib/actions';
import InputField from './InputField';
import SummaryInput from './SummaryInput';

export default function PersonalInput({ personal, dispatch }: any) {
  const [email, setEmail] = useState(personal.email ?? "");
  const [firstName, setFirstName] = useState(personal.firstName ?? "");
  const [lastName, setLastName] = useState(personal.lastName ?? "");
  const [tel, setTel] = useState(personal.tel ?? "")
  const [linkedIn, setLinkedIn] = useState(personal.linkedIn ?? "");
  const [title, setTitle] = useState(personal.title ?? "");

  function handleSubmit(e: FormEvent) {
    let action:Action = {
      type: ACTIONS.UPDATE_PERSONAL, payload: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        tel: tel,
        linkedIn: linkedIn,
        title: title
      }
    }
    dispatch(action)
    e.preventDefault()
  }

  return (
    <div>
      <h3>Personal Details</h3>
      <form onSubmit={handleSubmit} >
        <div className="row mb-2">
          <div className="col">
            <InputField
              data={{
                name: "first-name",
                id: "first-name",
                value: firstName,
                onChange: (e: any) => setFirstName(e.target.value)
              }}
              label={{ name: "First Name" }}
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
              label={{ name: "Last Name" }}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
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
          <div className="col">
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
        </div>
        <div className="row mb-2">
          <div className="col">
            <InputField
              data={{
                name: "title",
                id: "title",
                value: title,
                onChange: (e: any) => setTitle(e.target.value)
              }}
              label={{ name: "Job title" }}
            />
          </div>
          <div className="col">
            <InputField
              data={{
                name: "linkedin",
                id: "linkedin",
                value: linkedIn,
                onChange: (e: any) => setLinkedIn(e.target.value)
              }}
              label={{ name: "LinkedIn" }}
            />
          </div>
        </div>
        <SummaryInput summary={personal.summary} />
        <div className="mb-3">
          <button type="submit" className="btn btn-primary btn-block">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
