import React, { Component } from 'react'
import { Element } from 'react-scroll'
// import { Link } from 'react-router-dom'
import Modal from 'react-modal'

import ShopCard from '../../components/ShopCard'
import Title from '../../components/Title'
// import Button from '../../components/Button'

import iconShirt from './shirt.svg'
import iconDiscount from './discount.svg'

import './styles.css'

class Shop extends Component {
  state = {
    modalOpen: false,
  }

  openDDSModal = () => {
    this.setState({
      modalOpen: true,
    })
  }

  closeDDSModal = () => {
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    const { url } = this.props.match

    return (
      <section className="page-shop">
        <Element name="shop">
          <Title>Quero me inscrever</Title>
        </Element>

        <p className="subtitle"> Escolha o pacote ideal para você! </p>

        <main className="options">
          <ShopCard
            product="A"
            price={40}
            level={0}
            root={url}
            description={['Ciclo de Palestras', 'Coffee Break', 'Kit Semabio']}
          />
          <ShopCard
            product="B"
            price={50}
            level={1}
            root={url}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '1 Minicurso',
            ]}
          />
          <ShopCard
            product="C"
            price={55}
            level={2}
            root={url}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '1 Minicurso',
              'Camiseta',
            ]}
          />
          <ShopCard
            product="D"
            price={60}
            level={3}
            root={url}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '2 Minicursos',
              'Camiseta',
            ]}
          />
          <ShopCard
            product="E"
            price={70}
            level={4}
            root={url}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '3 Minicursos',
              'Camiseta',
            ]}
          />
        </main>

        {/* <footer className="shirt">
          <Link to={`${url}comprar/camiseta`}>
            <Button color='outline'>
              <img
                className="icon"
                alt='icone de camiseta'
                src={iconShirt}
              />
              <div className="text">
                Quero apenas a camiseta
              </div>
            </Button>
          </Link>
          <Button color='outline' onClick={this.openDDSModal}>
            <img
              className="icon -discount"
              alt='icone de desconto'
              src={iconDiscount}
            />
            <div className="text">
              Sou aluno da Assistência Estudantil
            </div>
          </Button>
        </footer> */}
        {/* <span className="price">Camiseta avulsa (R$ 25,00)</span> */}

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeDDSModal}
          contentLabel="DDS Modal"
          className="modal"
          style={{
            overlay: { zIndex: 5 },
          }}
        >
          <h1>Você sabia que...</h1>

          <p>
            Alunos participantes do programa de assistência estudantil da UnB
            têm direito a 50% de desconto em sua inscrição para a XVI Semana da
            Biologia?
          </p>

          <p>
            Basta nos enviar por e-mail a sua declaração (atualizada) de
            participação no programa, juntamente com um documento de
            identificação com foto, que iremos avaliar sua documentação e lhe
            responder com um código de uso único. Depois, é só realizar sua
            inscrição como qualquer outro participante e, no campo de códigos
            promocionais, inserir o código enviado para que 50% do valor total
            do seu pacote de inscrição seja abatido!
          </p>

          <p>
            Fácil, não é? Vem com a gente aproveitar esse evento que foi pensado
            também para você!
          </p>

          <div className="footer">
            <div className="bar" />
            <p>
              O email deve ser enviado para o endereço{' '}
              <strong>semabio.unb.bsb@gmail.com</strong> com o assunto
              “comprovante -programa de assistência”.
            </p>
            <p>
              Todos os códigos só poderão ser usados uma única vez e serão
              atrelados aos dados de cada participante, após o uso, o código
              será invalidado.
            </p>
          </div>

          <div className="close" onClick={this.closeDDSModal} />
        </Modal>
      </section>
    )
  }
}

export default Shop
