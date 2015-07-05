ActivDetailTpt = ReactMeteor.createClass({
  templateName: 'ActivDetailTpt',

  startMeteorSubscriptions: function() {
    var activId = Router.current().params.id;
    Meteor.subscribe('Comments.getByActivity', activId);
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
    var commentList = Comments.find({}).fetch();

    return {
      commentList: commentList
    };
  },

  getInitialState: function() {
    var activityId = Router.current().params.id;
    Meteor.call('Activities.getById', activityId, function (err, result) {
      this.setState({activity: result});
    }.bind(this));

    return {
      activity: {},
      commentList: [],
      comment: ''
    };
  },

  handleChange: function(e) {
    this.setState({comment: e.target.value});
  },

  getModel: function() {
    var model = {
      comment: this.state.comment,
      activId: this.state.activity._id
    };
    return model;
  },

  sendComment: function() {
    var model = this.getModel();
    if (model.comment.length === 0) {
      alert('content of comment is required!');
      return false;
    }

    Meteor.call('Comments.create', this.getModel(), function(err, data) {
      if (err) {
        alert('Server error, try again later!');
        console.log('err', err);
        return false;
      }

      this.setState({comment: ''});
    }.bind(this));
  },

  render: function() {
    var activityDetail = '';
    var commentListRender = <p className="wrapper">No comments</p>;

    if (this.state.activity) {
      item = this.state.activity;
      activityDetail = (
        <div>
          <ul className="table-view table-view-comment user-block">
            <li className="table-view-cell media">
              <img className="media-object pull-left" src="../../images/thumbnail_64x64.png" alt="Placeholder" />
              <div className="media-body">
                <p className="user-fullname">{item.username}</p>
                <p className="user-occupation">{item.occupation || item.email}</p>
              </div>
            </li>
          </ul>
          <div className="activ-block wrapper">
            <p className="activ-content">{item.content}</p>
            <p className="activ-date">*a minute ago</p>
          </div>
        </div>
      );
    }

    if (this.state.commentList.length) {
      commentListRender = this.state.commentList.map(function(item, i) {
        return (
          <li className="table-view-cell media">
            <img className="media-object pull-left" src="../../images/thumbnail_64x64.png" alt="Placeholder" />
            <div className="media-body">
              <p className="cmt-title">{item.fullName}</p>
              <p className="cmt-content">{item.comment}</p>
            </div>
          </li>
        );
      });
    }

    return (
      <div>
        <Header navActive="1" isHeader="true"
          plusHref="/activ/new" />
        <div className="container">
          {activityDetail}

          <div className="comment-list">
            <h6 className="small-title bold">Comments</h6>

            <ul className="table-view table-view-comment">
              {commentListRender}
            </ul>

            <div className="input-group">
              <input type="text" name="comment" className="input-content"
                placeholder="write your comment..."
                value={this.state.comment}
                onChange={this.handleChange} />
              <button className="btn btn-positive" onClick={this.sendComment}>SEND</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
});
