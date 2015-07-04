UsersDetailTpt = ReactMeteor.createClass({
  templateName: 'UsersDetailTpt',

  startMeteorSubscriptions: function() {
  },

  getMeteorState: function() {
  },

  render: function() {
    return (
      <div>
        <Header navActive="3" isHeader="true"
          plusHref="/topics/new" />

        <div className="container content">
          <h6 className="small-title">Users information</h6>
          <ul className="table-view table-view-custom user-info-list">
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
            <li className="table-view-cell media">
              <h6 className="user-bio-title">bio</h6>
              <p className="user-bio-content">Mình là tư, mình yêu màu tím, thích màu hường</p>
            </li>
          </ul>
          <div className="wrapper">
            <button className="btn btn-positive btn-block btn-outlined">Send a message</button>
          </div>
        </div>
      </div>
    );
  }
});
