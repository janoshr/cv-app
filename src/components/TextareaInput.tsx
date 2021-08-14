import React from 'react'

export default function TextareaInput({ content, label }: any) {
  return (
    <div className="mb-2">
      <label htmlFor="summary">{label}</label>
      <div className="btn-toolbar" role="toolbar">
        <div className="btn-group" role="group">
          <button className="btn btn-primary">
            <b>B</b>
          </button>
          <button className="btn btn-primary">
            <i>I</i>
          </button>
          <button className="btn btn-primary">
            <u>U</u>
          </button>
          <button className="btn btn-primary">
            <del>S</del>
          </button>
        </div>
        <div className="btn-group" role="group">
          <button className="btn btn-primary">
            <i className="bi bi-list-ol"></i>
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-list-ul"></i>
          </button>
        </div>
        <div className="btn-group" role="group">
          <button className="btn btn-primary">
            <i className="bi bi-link-45deg"></i>
          </button>
        </div>
      </div>
      <div className="mb-3">
        <textarea className="form-control" id={label} name={label}>
          {
            // TODO markdown parsing and rich text display
            // TODO make element controlled
            // TODO connect up buttons
          }
        </textarea>
      </div>
    </div>
  )
}
