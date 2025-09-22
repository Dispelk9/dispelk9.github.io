import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CardNavBar() {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top" style={{ zIndex: 1000 }}>
      <div className="container-fluid">
        <div className="mx-4">
          <Link href="/" className="navbar-brand">
            Dispelk9
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/stories/" className={`nav-link ${isActive('/stories') ? 'active' : ''}`}>
                Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cheatsheet/" className={`nav-link ${isActive('/cheatsheet') ? 'active' : ''}`}>
                CS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about/" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              {/* Bootstrap dropdown trigger */}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tools
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://analytical.dispelk9.de:8081"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Analytical Chemistry Tool v2.0
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://analytical.dispelk9.de:8443/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certcheck (Go / JS / Docker)
                  </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="/pdf/IKT_Thesis-Viet.pdf" target="_blank" rel="noopener noreferrer">
                    Extra
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
