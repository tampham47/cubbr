UsersListTpt = ReactMeteor.createClass({
  templateName: 'UsersListTpt',

  startMeteorSubscriptions: function() {
  },

  getMeteorState: function() {
  },

  render: function() {
    return (
      <div>
        <Header title="Users" />
        <div className="container content">
          <ul className="table-view">
            <li className="table-view-cell table-view-divider">
              <span className="text-center">Users arround 1.5km</span>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/users/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tan Nguyen
                  <p>Javascript Developer</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/users/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tam Pham
                  <p>Javascript Developer</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/users/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Phuc Kieu
                  <p>English Teacher</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/users/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tan Nguyen
                  <p>Javascript Developer</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/users/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tam Pham
                  <p>Javascript Developer</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/users/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Phuc Kieu
                  <p>English Teacher</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/users/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tan Nguyen
                  <p>Javascript Developer</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/users/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tam Pham
                  <p>Javascript Developer</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/users/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Phan Kieu
                  <p>English Teacher</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});
