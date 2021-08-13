import * as CV from './cvTypes';

/**
 * @const
 * Possible form actions
 */
export const ACTIONS = {
  UPDATE_PERSONAL: 'UPDATE_PERSONAL',
  ADD_INSTITUTION: 'ADD_INSTITUTION',
  UPDATE_INSTITUTION: 'UPDATE_INSTITUTION',
  DELETE_INSTITUTION: 'DELETE_INSTITUTION',
  ADD_JOB: 'ADD_JOB',
  UPDATE_JOB: 'UPDATE_JOB',
  DELETE_JOB: 'DELETE_JOB',
  ADD_SKILL: 'ADD_SKILL',
  UPDATE_SKILL: 'UPDATE_SKILL',
  DELETE_SKILL: 'DELETE_SKILL',
} as const;

/**
 * All action for the dispatch function
 */
export type Action = 
  | { type: typeof ACTIONS.UPDATE_PERSONAL, payload: CV.Personal }
  | { type: typeof ACTIONS.ADD_INSTITUTION, payload: CV.Institution }
  | { type: typeof ACTIONS.UPDATE_INSTITUTION, payload: CV.Institution }
  | { type: typeof ACTIONS.DELETE_INSTITUTION, payload: number}
  | { type: typeof ACTIONS.ADD_JOB, payload: CV.Job }
  | { type: typeof ACTIONS.UPDATE_JOB, payload: CV.Job}
  | { type: typeof ACTIONS.DELETE_JOB, payload: number }
  | { type: typeof ACTIONS.ADD_SKILL, payload: CV.Skill}
  | { type: typeof ACTIONS.UPDATE_SKILL, payload: CV.Skill}
  | { type: typeof ACTIONS.DELETE_SKILL, payload: number }
