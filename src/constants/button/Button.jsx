import "./Button.css"

export default function Button({Button,href,icon}) {
  return (
   <a targrt="_blank"className="btn" href={href}><button>{Button}{icon}</button></a>
  )
}
