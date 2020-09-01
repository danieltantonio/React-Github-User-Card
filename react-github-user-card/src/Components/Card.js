import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  margin: 0 12px;
  margin-bottom: 10px;
  height: 20rem;

  img {
      height: 100%;
  }

  .text-container {
      text-align: center;
  }
`;

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <StyledCard>
              <div className="img-container"><img src={this.props.user.avatar_url} /></div>
              <div className="text-container">
                <h3>{this.props.user.name}</h3>
                <p>Bio: {this.props.user.bio}</p>
                <p>Location: {this.props.user.location}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
              </div>
            </StyledCard>
        )
    }
}

export default Card;