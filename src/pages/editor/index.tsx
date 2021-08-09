import Head from 'next/head'
import styles from '../../styles/Editor.module.scss'
import Link from 'next/link'
import Education from '../../components/education'

export default function Editor() {
  let data = {}

  return (
    <div className="container-fluid">

      <div className="row">
        <aside className={`${styles.aside} col-6`}>
          <div className="container">
            <h1>CV editor</h1>
            <form >
              <label htmlFor="file" className="form-label">Upload file</label>
              <input type="file" name="data" id="file" className="form-control" />
              <label htmlFor="i-fname" className="form-label">First Name</label>
              <input type="text" name="name" id="i-fname" className="form-control" />
              <label htmlFor="i-lname" className="form-label">Last Name</label>
              <input type="text" name="name" id="i-lname" className="form-control" />
              <label htmlFor="i-email" className="form-label">Email</label>
              <input type="email" name="email" id="i-email" className="form-control" />
              <label htmlFor="i-tel" className="form-label">Mobile number</label>
              <input type="text" name="tel" id="i-tel" className="form-control" />
            </form>
            <Education />
          </div>
        </aside>
        <div className={`${styles.main} col-6`}>

        </div>
      </div>
    </div>
  );
}