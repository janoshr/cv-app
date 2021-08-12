import { useReducer } from 'react';
import styles from '../styles/Editor.module.scss'
import PersonalInput from './PersonalInput';

let sections = ['personal', 'education', 'experience', 'skills']

export interface Institution {
  name: string,
  qualification?: string,
  from?: Date,
  to?: Date | false,
  description?: string
}

interface Job {
  company: string,
  title: string,
  location?: string,
  from?: Date,
  to?: Date | false,
  description?: string,
}

interface Skill {
  name: string,
  level: number,
  icon?: string,
}

interface Personal {
  firstName: string,
  lastName: string,
  email: string,
  title?: string,
  tel?: string,
  linkedIn?: string,
  website?: string,
  summary: string,
}

export interface CV {
  personal?: Personal,
  education?: Institution[],
  experience?: Job[],
  skills?: Skill[],
  other?: any
}

export const ACTIONS = {
  UPDATE_PERSONAL: 'update-personal',
  ADD_INSTITUTION: 'add-institution',
  DELETE_INSTITUTION: 'delete-institution',
  UPDATE_INSTITUTION: 'update-institution',
  ADD_JOB: 'add-job',
  DELETE_JOB: 'delete-job',
  UPDATE_JOB: 'update-job',
  ADD_SKILL: 'add-skill',
  DELETE_SKILL: 'delete-skill',
  UPDATE_SKILL: 'update-skill',
}


function reducer(state: CV, action: any) {
  switch (action.type) {
    case ACTIONS.ADD_INSTITUTION:
      return {}
    case ACTIONS.UPDATE_INSTITUTION:
      return {}

    case ACTIONS.DELETE_INSTITUTION:
      return {}
    case ACTIONS.UPDATE_PERSONAL:
      return { ...state, personal: action.payload}
    default:
      return state
  }
}

export default function Editor() {
  const [state, dispatch] = useReducer(reducer, { personal: { firstName: "", lastName: "", email: "" } })


  return (
    <>
      <aside className={`${styles.aside} col-6`}>
        <div className="container">
          <h1>CV editor</h1>
          
          <PersonalInput dispatch={dispatch} personal={state.personal} />
        </div>
      </aside>
      <div className={`${styles.main} col-6`}>

      </div>
    </>
  );
}