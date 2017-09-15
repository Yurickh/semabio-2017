import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class BlockSelector extends Component {
  static propTypes = {
    currentBlock: PropTypes.number,
    onChange: PropTypes.func,
  }

  isSelected = (index) => {
    return this.props.currentBlock === index ? '-selected' : ''
  }

  selectBlock = (index) => {
    this.props.onChange(index)
  }

  render() {
    return (
      <div className="block-selector">
        {
          ['Bloco A', 'Bloco B', 'Bloco C', 'Bloco D', 'Bloco E'].map((block, index) => {
            return <div
              className={`block ${this.isSelected(index)}`}
              onClick={() => this.selectBlock(index)}
              key={block}
            >
              {block}
            </div>
          })
        }
      </div>
    )
  }
}

export default BlockSelector
