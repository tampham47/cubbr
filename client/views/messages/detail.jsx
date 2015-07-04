MessagesDetailTpt = ReactMeteor.createClass({
  templateName: 'MessagesDetailTpt',

  startMeteorSubscriptions: function() {
  },

  getMeteorState: function() {
  },

  render: function() {
    return (
      <div>
        <Header title="Messages" />
        <div className="container content">
          <ul className="table-view">
            <li className="table-view-cell table-view-divider">Content</li>
            <li className="table-view-cell media">
              <img className="media-object pull-left" src="../images/thumbnail_48x48.png" alt="Placeholder" />
              <div className="media-body">
                Tan Nguyen
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
            <li className="table-view-cell media">
              <img className="media-object pull-left" src="../images/thumbnail_48x48.png" alt="Placeholder" />
              <div className="media-body">
                Tam Pham
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
          </ul>
          <form>
            <input type="text" name="comment" placeholder="Write a message..." />
            <button className="btn btn-positive btn-block">SEND</button>
          </form>
        </div>
      </div>
    );
  }
});
