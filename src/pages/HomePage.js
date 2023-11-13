import { Link } from 'react-router-dom';
import React from 'react';
import '../style/Pages.css';

export default function HomePage() {
  return (
    <div className="main">
      <div className="Link-container">
        <Link to="/" className="Link">
          <div className="btn">Anasayfa</div>
        </Link>

        <Link to="/Add-Tenant" className="Link">
          <div className="btn">Kiracı Ekle</div>
        </Link>

        <Link to="/Add-Property" className="Link">
          <div className="btn">Mülk Ekle</div>
        </Link>

        <Link to="/Create-Rental" className="Link">
          <div className="btn">Kiralama Oluştur</div>
        </Link>
      </div>
    </div>
  );
}
