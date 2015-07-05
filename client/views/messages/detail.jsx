MessagesDetailTpt = ReactMeteor.createClass({
  templateName: 'MessagesDetailTpt',

  startMeteorSubscriptions: function() {
  },

  getMeteorState: function() {
  },

  render: function() {
    return (
      <div>
        <Header navActive="4" isHeader="true"
          plusHref="/activ/new" />

        <div className="container content">
          <h6 className="small-title">Messages</h6>
          <ul className="table-view table-view-custom user-list user-message-list">
            <li className="table-view-cell media">
              <a className="" href="/messages/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="/images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tan Nguyen
                  <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="" href="/messages/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="/images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tam Pham
                  <p>Reference site about Lorem Ipsum, giving information on its origins</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="" href="/messages/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="/images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Phuc Kieu
                  <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="" href="/messages/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="/images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tan Nguyen
                  <p>Reference site about Lorem Ipsum, giving information on its origins</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="" href="/messages/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="/images/thumbnail_48x48.png" alt="Placeholder" />
                <div className="media-body">
                  Tam Pham
                  <p>Reference site about Lorem Ipsum, giving information on its origins</p>
                </div>
              </a>
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
    );
  }
});
