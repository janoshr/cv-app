import React from 'react'

export default function InputField({ data, label }: any) {
  let id = `${data?.id}-input`
  return (
    <>
      {label &&
        <label className={label.className ?? "form-label"} htmlFor={id}>
          {label.name}
        </label>
      }
      <input
        type={data.type ?? "text"}
        name={data.name}
        id={id}
        className={data.className ?? "form-control"}
        value={data.value}
        onChange={data.onChange}
        placeholder={data.placeholder ?? ""}
      />
    </>
  )
}
