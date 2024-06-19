import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Home = () => {
  const contextShare = useContext(Context);

  return (
    <div className="home-container">
      <h1>Página de Inicio</h1>
      <p className="welcome-message">
        Hola Bienvenid@ <strong>{contextShare.user.username}</strong>; a mi tienda
      </p>
    </div>
  )
}
