import React, { ChangeEvent, FormEvent, useState } from 'react'
import { School } from '../lib/cvTypes'
import { ACTIONS } from '../lib/actions'
import InputField from './InputField'
import TextareaInput from './TextareaInput'
import { Accordion, Button, Row, Container, Form, Col } from 'react-bootstrap'

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
        degree: "",
        from: "",
        to: "",
        description: "",
        city: "",
      }
    })
    e.preventDefault()
    e.stopPropagation()
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>, i: number, field: string) {
    let list = [...schools.list]
    list[i][field] = e.target.value
    setschools({ list: list })
  }

  return (
    <div>
      <h3>Education</h3>
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
                      {school.to && <> &ndash; {school.to}</>}
                    </>}
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <Form onSubmit={(e) => handleSubmit(e, i)}>
                  <Container fluid className="px-1">
                    <Row className="mb-2">
                      <Form.Group as={Col} controlId={`school-${i}`} >
                        <Form.Label>
                          School
                        </Form.Label>
                        <Form.Control
                          value={school.name ?? ""}
                          onChange={(e: any) => handleChange(e, i, 'name')}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId={`degree-${i}`}>
                        <Form.Label>
                          Degree
                        </Form.Label>
                        <Form.Control
                          value={school.degree ?? ""}
                          onChange={(e: any) => handleChange(e, i, 'degree')}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-2">
                      <Form.Group as={Col} sm={3} controlId={`date-from-${i}`}>
                        <Form.Label>
                          From
                        </Form.Label>
                        <Form.Control
                          type="month"
                          value={school.from}
                          onChange={(e: any) => handleChange(e, i, 'from')}
                          placeholder="YYYY/MM"
                        />
                      </Form.Group>
                      <Form.Group as={Col} sm={3} controlId={`date-to-${i}`}>
                        <Form.Label>
                          To
                        </Form.Label>
                        <Form.Control
                          type="month"
                          value={school.to}
                          onChange={(e: any) => handleChange(e, i, 'to')}
                        />
                      </Form.Group>
                      <Form.Group as={Col} sm={6} controlId={`city-${i}`}>
                        <Form.Label>
                          City
                        </Form.Label>
                        <Form.Control
                          value={school.city ?? ""}
                          onChange={(e: any) => handleChange(e, i, 'city')}
                        />
                      </Form.Group>
                    </Row>
                    <TextareaInput label="Description" id={`summary-${i}`} />
                    <div className="mb-2">
                      <Button type="submit" variant="primary">Save</Button>
                    </div>
                  </Container>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
        <Button onClick={addschool} variant="primary">+</Button>
      </Accordion>
    </div>
  )
}
