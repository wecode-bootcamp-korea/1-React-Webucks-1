import { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [
        {
          text: '',
        },
      ],
    };
  }

  textChange = event => {
    this.setState({
      newComment: event.target.value,
    });
  };

  add = () => {
    let arr = this.state.comments;
    arr.push({
      text: this.state.newComment,
    });

    this.setState({
      comments: arr,
      newComment: '',
    });
  };

  pressEnter = event => {
    if (event.key === 'Enter' && this.state.newComment) {
      this.add();
      event.target.value = '';
    }
  };

  render() {
    return (
      <>
        <div>
          <ul className="commentBox">
            {this.state.comments.map(el => (
              <li>{el.text}</li>
            ))}
          </ul>
        </div>
        <div className="inputReview">
          <input
            type="text"
            onChange={this.textChange}
            onKeyPress={this.pressEnter}
            value={this.state.newComment}
            placeholder="리뷰를 입력해주세요."
          />
        </div>
      </>
    );
  }
}

export default Comment;