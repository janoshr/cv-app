import React from 'react'
import { Button, ButtonGroup, ButtonToolbar, Form } from 'react-bootstrap'

export default function TextareaInput({ content, label, id }: any) {
  return (
    <Form.Group className="mb-2" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <ButtonToolbar>
        <ButtonGroup>
          <Button variant="primary">
            <b>B</b>
          </Button>
          <Button variant="primary">
            <i>I</i>
          </Button>
          <Button variant="primary">
            <u>U</u>
          </Button>
          <Button variant="primary">
            <del>S</del>
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="primary">
            <i className="bi bi-list-ol"></i>
          </Button>
          <Button variant="primary">
            <i className="bi bi-list-ul"></i>
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="primary">
            <i className="bi bi-link-45deg"></i>
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <div className="mb-3">
        <Form.Control name={label}>
          {
            // TODO markdown parsing and rich text display
            // TODO make element controlled
            // TODO connect up buttons
          }
        </Form.Control>
      </div>
    </Form.Group>
  )
}
