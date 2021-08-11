import React from 'react'

export default function InputField({ data, label }:any) {
  return (
    <>
      {label && 
        <label className={label.className ?? "form-label"}>
          {label.name}
        </label>
      }
      <input
        type={data.type ?? "text"}
        name={data.name}
        id={data?.id}
        className={data.className ?? "form-control"}
        value={data.value}
        onChange={data.onChange}
      />
    </>
  )
}
