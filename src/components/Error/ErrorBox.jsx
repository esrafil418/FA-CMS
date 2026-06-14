import './ErrorBox.css'

export default function ErrorBox({msg}) {
  return (
    <h1 className='cms-err'>{msg}</h1>
  )
}
