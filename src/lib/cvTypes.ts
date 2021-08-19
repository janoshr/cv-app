/**
 * Education history entry
 */
export interface School {
  index: number,
  name: string,
  degree?: string,
  from?: string,
  to?: string | false,
  description?: string,
  city?: string,
}
/**
 * Employment history entry
 */
export interface Job {
  index: number,
  employer: string,
  title: string,
  location?: string,
  from?: string,
  to?: string | false,
  description?: string,
  city?: string,
}
/**
 * Personal skill entry
 */
export interface Skill {
  index: number,
  name: string,
  level: number,
  icon?: string,
}
/**
 * Personal details and contact
 */
export interface Personal {
  firstName: string,
  lastName: string,
  email: string,
  title?: string,
  tel?: string,
  linkedIn?: string,
  website?: string,
  summary?: string,
}
/**
 * Full CV type
 */
export interface CV {
  personal?: Personal,
  education?: School[],
  experience?: Job[],
  skills?: Skill[],
  other?: any
}