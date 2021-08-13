/**
 * Education history entry
 */
export interface Institution {
  index: number,
  name: string,
  qualification?: string,
  from?: Date,
  to?: Date | false,
  description?: string
}
/**
 * Employment history entry
 */
export interface Job {
  index: number,
  company: string,
  title: string,
  location?: string,
  from?: Date,
  to?: Date | false,
  description?: string,
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
  education?: Institution[],
  experience?: Job[],
  skills?: Skill[],
  other?: any
}