import React from 'react'

export default function InputField({ label, ...props}:any) {
  let id = `${props?.id}-input`
  return (
    <>
      {label &&
        <label className={label.className ?? "form-label"} htmlFor={id}>
          {label.name}
        </label>
      }
      <input
        type="text"
        className="form-control"
        {...props}
        id={id}
      />
    </>
  )
}
