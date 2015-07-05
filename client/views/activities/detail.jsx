ActivDetailTpt = ReactMeteor.createClass({
  templateName: 'ActivDetailTpt',

  startMeteorSubscriptions: function() {

  },

  // Make sure your component implements this method.
  getMeteorState: function() {
    // console.log(activity);
    // return {
    //   activity: {}
    // };
  },

  getInitialState: function () {
    var activityId = Router.current().params.id;
    Meteor.call('Activities.getById', activityId, function (err, result) {
      this.setState({activity: result});
    }.bind(this));

    return {
      activity: {}
    };
  },

  render: function() {
    var activityDetail = '';
    if (this.state.activity) {
      item = this.state.activity;
      activityDetail = (function () {
        return (
          <div>
            <ul className="table-view table-view-comment user-block">
              <li className="table-view-cell media">
                <img className="media-object pull-left" src="../../images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  <p className="user-fullname">{item.username}</p>
                  <p className="user-occupation">{item.occupation}</p>
                </div>
              </li>
            </ul>
            <div className="activ-block wrapper">
              <p className="activ-content">{item.content}</p>
              <p className="activ-date">{item.postedDate}</p>
            </div>
          </div>
        );
      })();
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
              <li className="table-view-cell media">
                <img className="media-object pull-left" src="../../images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  <p className="cmt-title">Tan Nguyen</p>
                  <p className="cmt-content">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </li>
              <li className="table-view-cell media">
                <img className="media-object pull-left" src="../../images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  <p className="cmt-title">Tan Nguyen</p>
                  <p className="cmt-content">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </li>
            </ul>

            <form>
              <div className="input-group">
                <input type="text" name="comment" className="input-content"
                  placeholder="What do you think about this?" />
                <button className="btn btn-positive">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});
