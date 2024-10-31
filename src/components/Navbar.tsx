'use client'

import Link from 'next/link'
import { useState } from 'react'

import { MdCreate, MdAccountCircle, MdStorefront } from 'react-icons/md'
import { BiMenu } from 'react-icons/bi'

export default function Navbar() {
  const [isResponsiveWeb, setIsResponsiveWeb] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <Link href="/stores">
              <MdStorefront />
              <span>맛집 목록</span>
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link href="/stores/new">
              <MdCreate />
              <span>맛집 등록</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* 반응형웹일 경우 true */}
      {isResponsiveWeb && (
        <>
          <button
            type="button"
            className="navbar__button"
            onClick={() => setIsOpen((val) => !val)}
          >
            <BiMenu />
          </button>

          <div className="navbar-mobile">
            <ul className="navbar-mobile__list">
              <li>
                <Link
                  href="/stores"
                  className="navbar-mobile__list-item"
                  onClick={() => setIsOpen(false)}
                >
                  맛집 목록
                </Link>
              </li>
              <li>
                <Link
                  href="/stores/new"
                  className="navbar-mobile__list-item"
                  onClick={() => setIsOpen(false)}
                >
                  맛집 등록
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  )
}
