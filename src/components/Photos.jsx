import React from 'react';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  }

  cyclePhotos = (val) => {
    const { photos } = this.props;
    const { index } = this.state;
    let newIndex = index + val;
    if (newIndex >= photos.length) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = photos.length - 1;
    }
    this.setState({
      index: newIndex
    })
  }

  render() {
    const { index } = this.state;
    const { photos } = this.props;

    return (
      <div className="photos">
        <button onClick={() => this.cyclePhotos(-1)}>-</button>
        <img src={photos[index]} />
        <button onClick={() => this.cyclePhotos(1)}>+</button>
      </div>
    )
  }
}

export default Photos;