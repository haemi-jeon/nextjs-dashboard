import Link from 'next/link'

import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__logo">
        <Link href="/">
          <img src="/images/logo.png" alt="logo" width={80} />
        </Link>
      </div>
      <div className="topbar__tool">
        <div className="title">
          <span>TITLE</span>
        </div>
        <ul className="tool__menu">
          <li className="tool__menu-item">
            <span className="avatar">
              <FiUser />
            </span>
            <span>관리자</span>
          </li>
          <li className="tool__menu-item">
            <button type="button">
              <IoSettingsOutline />
            </button>
          </li>
          <li className="tool__menu-item">
            <button type="button">
              <IoLogOutOutline />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
