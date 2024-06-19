import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const Contact = () => {

  const {user} = useContext(Context);

  return (
    <div>
      <h1>Página de Contacto</h1>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Teléfono:</strong>{user.phone}</p>
  </div>
  )
}