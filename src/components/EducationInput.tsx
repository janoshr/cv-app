import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ACTIONS, Institution } from './Editor'

export default function EducationInput({ education, dispatch }: any) {
  const [institutions, setInstitutions] = useState(education ? { list: education } : { list: [] })

  function addInstitution(e:any) {
    setInstitutions(prevState => {
      return {
        list: [...prevState.list, {
          // add new institution element here
        }]
      }
    })

  }

  function handleSubmit(e: FormEvent) {
    dispatch({
      type: ACTIONS.ADD_INSTITUTION, payload: {
        name: "",
        qualification: "",
        from: "",
        to: "",
        description: "",
      }
    })
    e.preventDefault()
  }

  function handleChange(e:ChangeEvent<HTMLInputElement>, i:number, field:string){
    let list = [...institutions.list]
    list[i][field] = e.target.value
    setInstitutions({ list:list })
  }

  return (
    <div>
      {institutions.list.map((institution:Institution, i:number) => {
        return (
          <div key={i}>
            <div className="mb-3">
              <label htmlFor="i-email" className="form-label">Email</label>
              <input
                type="text"
                name="email"
                id="i-email"
                className="form-control"
                value={institution?.name}
                onChange={e => handleChange(e,i,'')}
              />
            </div>
          </div>
        );
      })}
      <button onClick={addInstitution}>+</button>
    </div>
  )
}
