import './Header.css'

export default function Header() {
return (
<>
<div className="header_inner container">
  <a className="logo" href='#!'title='YEEZY'>
    <img src="./images/logo-yellow.svg" alt="logo" />
    <p> YEEZY </p>
  </a>
  <ul className="nav_list">
    <li className="nav_item" title='Demo'>Demo</li> /
    <li className="nav_item" title='Community'>Community</li> /
    <li className="nav_item" title='Pricing'>Pricing</li>
  </ul>
  <div className="nav_btn">
    <button title='Download' > Download Now </button>
  </div>
</div>
</>
)
}