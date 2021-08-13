import { useReducer } from 'react';
import styles from '../styles/Editor.module.scss'
import PersonalInput from './PersonalInput';
import { CV } from '../lib/cvTypes'
import { ACTIONS } from '../lib/actions'

let sections = ['personal', 'education', 'experience', 'skills']

function reducer(state: CV, action: any) {
  switch (action.type) {
    case ACTIONS.ADD_INSTITUTION:
      return {}
    case ACTIONS.UPDATE_INSTITUTION:
      return {}

    case ACTIONS.DELETE_INSTITUTION:
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
        </div>
      </aside>
      
    </>
  );
}