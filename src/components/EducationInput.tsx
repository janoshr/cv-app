import React, { ChangeEvent, FormEvent, useState } from 'react'
import { School } from '../lib/cvTypes'
import { ACTIONS } from '../lib/actions'
import InputField from './InputField'
import TextareaInput from './TextareaInput'
import { Accordion } from 'react-bootstrap'

export default function EducationInput({ education, dispatch }: any) {
  const [schools, setschools] = useState(education ? { list: education } : { list: [] })

  function addschool(e: any) {
    setschools(prevState => {
      return {
        list: [...prevState.list, {
          index: prevState.list.length,
          name: "",
        }]
      }
    })

  }

  function handleSubmit(e: FormEvent, index: number) {
    dispatch({
      type: ACTIONS.ADD_SCHOOL, payload: {
        index: index,
        name: "",
        qualification: "",
        from: "",
        to: "",
        description: "",
      }
    })
    e.preventDefault()
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>, i: number, field: string) {
    let list = [...schools.list]
    list[i][field] = e.target.value
    setschools({ list: list })
  }

  return (
    <Accordion defaultActiveKey="0">
      {schools.list.map((school: School, i: number) => {
        return (
          <Accordion.Item eventKey={i.toString()} key={i} >
            <Accordion.Header>
              <strong>
                {school?.degree}
                {school.degree && school.name &&
                  <span className="text-muted"> at </span>
                }
                {school?.name}
                {!school.name && !school.degree &&
                  <span className="text-muted">(Not specified)</span>
                }
              </strong>
              <span className="text-muted">
                {(school.name || school.degree) && 
                <>&nbsp;&nbsp;
                  {school?.from}
                  {school.to && <>&ndash; {school.to}</>}
                </>}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <form onSubmit={(e) => handleSubmit(e, i)}>
                <div className="row mb-2">
                  <div className="col">
                    <InputField
                      name={`school-${i}`}
                      id={`school-${i}`}
                      value={school.name}
                      onChange={(e: any) => handleChange(e, i, 'name')}
                      label={{ name: "School" }}
                    />
                  </div>
                  <div className="col">
                    <InputField
                      name={`degree-${i}`}
                      id={`degree-${i}`}
                      value={school.degree}
                      onChange={(e: any) => handleChange(e, i, 'degree')}
                      label={{ name: "Degree" }}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-3">
                    <InputField
                      type="month"
                      name={`date-from-${i}`}
                      id={`date-from-${i}`}
                      value={school.from}
                      onChange={(e: any) => handleChange(e, i, 'from')}
                      placeholder="YYYY/MM"
                      label={{ name: "From" }}
                    />
                  </div>
                  <div className="col-3">
                    <InputField
                      type="month"
                      name={`date-to-${i}`}
                      id={`date-to-${i}`}
                      value={school.to}
                      onChange={(e: any) => handleChange(e, i, 'to')}
                      label={{ name: "To" }}
                    />
                  </div>
                  <div className="col-6">
                    <InputField
                      name={`city-${i}`}
                      id={`city-${i}`}
                      value={school.city}
                      onChange={(e: any) => handleChange(e, i, 'city')}
                      label={{ name: "City" }}
                    />
                  </div>
                </div>
                <TextareaInput label="Description" />
              </form>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
      <button onClick={addschool}>+</button>
    </Accordion>
  )
}
