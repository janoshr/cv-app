import Head from 'next/head'
import styles from '../../styles/Editor.module.scss'
import Link from 'next/link'
import Editor from '../../components/Editor'
import CV from '../../components/CV'

export default function EditorPage() {
  let data = {}

  return (
    <div className="container-fluid">

      <div className="row">
        <Editor />
        <CV />
      </div>
    </div>
  );
}