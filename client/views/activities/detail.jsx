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
          <ul className="table-view">
            <li className="table-view-cell media">
              <img className="media-object pull-left" src="../images/thumbnail_64x64.png" alt="Placeholder" />
              <div className="media-body">
                Tan Nguyen
                <p>Javascript Developer</p>
              </div>
            </li>
          </ul>
          <div className="wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco.
            </p>
            <p>*5 hours ago</p>
          </div>

          <div className="comment-list">
            <h6 className="small-title bold">Comments</h6>
            <ul className="table-view">
              <li className="table-view-cell media">
                <img className="media-object pull-left" src="../images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Tan Nguyen
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </li>
              <li className="table-view-cell media">
                <img className="media-object pull-left" src="../images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Tam Pham
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </li>
            </ul>
            <form>
              <input type="text" name="comment" placeholder="What do you think about this?" />
              <button className="btn btn-positive btn-block">SEND</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
});
