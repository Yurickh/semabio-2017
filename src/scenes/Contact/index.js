import React, { Component } from 'react'
import { Element } from 'react-scroll'

import Cloud from '../../components/Cloud'
import Title from '../../components/Title'

import './styles.css'

class Contact extends Component {
  render() {
    return (
      <Element name="contact" className="page-contact">
        <Cloud />
        <Title white>Contato</Title>

        <h2 className="subtitle">Mande um email para nós através do endereço <strong>semabio.unb.bsb@gmail.com</strong>,<br /> ou só um “oi” mesmo se quiser</h2>

        {/* <form className="form">
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Mensagem:
            <textarea type="textarea" name="mensagem" />
          </label>
          <Button color="red">
            Enviar
          </Button>
        </form> */}

      </Element>
    )
  }
}

export default Contact
