UsersDetailTpt = ReactMeteor.createClass({
  templateName: 'UsersDetailTpt',

  startMeteorSubscriptions: function() {
  },

  getMeteorState: function() {
  },

  render: function() {
    return (
      <div>
        <div className="content">
          <ul className="table-view">
            <li className="table-view-cell table-view-divider">
              <span className="text-center">Users Information</span>
            </li>
            <li className="table-view-cell media">
              <span className="media-object pull-left icon icon-person"></span>
              <div className="media-body">
                Tan Nguyen
              </div>
            </li>
            <li className="table-view-cell media">
              <span className="media-object pull-left icon icon-compose"></span>
              <div className="media-body">
                tannd1993@gmail.com
              </div>
            </li>
            <li className="table-view-cell media">
              <span className="media-object pull-left icon icon-plus"></span>
              <div className="media-body">
                01642922011
              </div>
            </li>
          </ul>
          <button className="btn btn-positive btn-block btn-outlined">Send a message</button>
        </div>
      </div>
    );
  }
});
