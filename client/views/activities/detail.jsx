ActivDetailTpt = ReactMeteor.createClass({
  templateName: 'ActivDetailTpt',

  startMeteorSubscriptions: function() {
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
  },

  render: function() {
    return (
      <div>
        <Header navActive="1" isHeader="true"
          plusHref="/activ/new" />
        <div className="container">

          <ul className="table-view table-view-comment user-block">
            <li className="table-view-cell media">
              <img className="media-object pull-left" src="../images/thumbnail_64x64.png" alt="Placeholder" />
              <div className="media-body">
                <p className="user-fullname">Tan Nguyen</p>
                <p className="user-occupation">Naustud.io</p>
              </div>
            </li>
          </ul>

          <div className="activ-block wrapper">
            <p className="activ-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco.
            </p>
            <p className="activ-date">*5 hours ago</p>
          </div>

          <div className="comment-list">
            <h6 className="small-title bold">Comments</h6>

            <ul className="table-view table-view-comment">
              <li className="table-view-cell media">
                <img className="media-object pull-left" src="../images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  <p className="cmt-title">Tan Nguyen</p>
                  <p className="cmt-content">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </li>
              <li className="table-view-cell media">
                <img className="media-object pull-left" src="../images/thumbnail_64x64.png" alt="Placeholder" />
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
