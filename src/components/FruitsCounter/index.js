import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onIncrementMangos = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onIncrementBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="num">{mangoes}</span> mangoes
            <span className="num"> {bananas}</span> bananas
          </h1>
          <div className="fruits-counter">
            <div className="cards">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="btn"
                type="button"
                onClick={this.onIncrementMangos}
              >
                {' '}
                Eat Mango
              </button>
            </div>
            <div className="cards">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="btn"
                type="button"
                onClick={this.onIncrementBananas}
              >
                {' '}
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
