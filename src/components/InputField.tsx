import React from 'react'
import { Form } from 'react-bootstrap'

export default function InputField({ label, ...props}:any) {
  let id = `${props?.id}-input`
  return (
    <>
      {label &&
        <Form.Label htmlFor={id}>
          {label.name}
        </Form.Label>
      }
      <Form.Control
        type="text"
        className="form-control"
        {...props}
        id={id}
      />
    </>
  )
}
