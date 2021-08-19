import React, { FormEvent, useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Action, ACTIONS } from '../lib/actions';
import InputField from './InputField';
import SummaryInput from './TextareaInput';

export default function PersonalInput({ personal, dispatch }: any) {
  const [email, setEmail] = useState(personal.email ?? "");
  const [firstName, setFirstName] = useState(personal.firstName ?? "");
  const [lastName, setLastName] = useState(personal.lastName ?? "");
  const [tel, setTel] = useState(personal.tel ?? "")
  const [linkedIn, setLinkedIn] = useState(personal.linkedIn ?? "");
  const [title, setTitle] = useState(personal.title ?? "");

  function handleSubmit(e: FormEvent) {
    let action: Action = {
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
    e.stopPropagation()
  }

  return (
    <div>
      <h3>Personal Details</h3>
      <Form onSubmit={handleSubmit} >
        <Container fluid className="px-1">
          <Row className="mb-2">
            <Form.Group as={Col} controlId="first-name">
              <Form.Label>
                First Name
              </Form.Label>
              <Form.Control
                value={firstName}
                onChange={(e: any) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="last-name">
              <Form.Label>
                Last Name
              </Form.Label>
              <Form.Control
                value={lastName}
                onChange={(e: any) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="email">
              <Form.Label>
                Email
              </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="tel">
              <Form.Label>
                Mobile number
              </Form.Label>
              <Form.Control
                value={tel}
                onChange={(e: any) => setTel(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="title">
              <Form.Label>
                Job title
              </Form.Label>
              <Form.Control
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="linkedin">
              <Form.Label>
                LinkedIn
              </Form.Label>
              <Form.Control
                value={linkedIn}
                onChange={(e: any) => setLinkedIn(e.target.value)}
              />
            </Form.Group>
          </Row>
        </Container>
        <SummaryInput content={personal.summary} label="Summary" />
        <div className="mb-3">
          <Button type="submit" variant="primary">
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}
