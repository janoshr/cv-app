import { useReducer } from 'react';
import styles from '../styles/Editor.module.scss'
import PersonalInput from './PersonalInput';
import { CV } from '../lib/cvTypes'
import { ACTIONS } from '../lib/actions'
import EducationInput from './EducationInput';

let sections = ['personal', 'education', 'experience', 'skills']

function reducer(state: CV, action: any) {
  switch (action.type) {
    case ACTIONS.ADD_SCHOOL:
      return {}
    case ACTIONS.UPDATE_SCHOOL:
      return {}

    case ACTIONS.DELETE_SCHOOL:
      return {}
    case ACTIONS.UPDATE_PERSONAL:
      return { ...state, personal: action.payload }
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
          <EducationInput dispatch={dispatch} education={state.education} />
        </div>
      </aside>
      
    </>
  );
}