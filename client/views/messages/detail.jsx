MessagesDetailTpt = ReactMeteor.createClass({
  templateName: 'MessagesDetailTpt',

  startMeteorSubscriptions: function() {
    var toUserId = Router.current().params.id;
    Meteor.subscribe('Messages.getByConversation', toUserId);
  },

  getMeteorState: function() {
    var messageList = Messages.find({}).fetch();
    return {
      messageList: messageList
    };
  },

  handleChange: function(e) {
    this.setState({message: e.target.value});
  },

  getInitialState: function() {
    return {
      message: '',
      messageList: []
    };
  },

  getModel: function() {
    var model = {
      message: this.state.message,
      to: Router.current().params.id
    };
    return model;
  },

  submitMessage: function() {
    Meteor.call('Messages.create', this.getModel(), function(err, data) {
      if (err) {
        return;
      }

      this.setState({message: ''});
    }.bind(this));
  },

  getAvatarPath: function(item) {
    for (var key in item.services) {
      if (item.services.hasOwnProperty(key)) {
          var obj = item.services[key];
          for (var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
              if (prop === 'id') {
                imageUrl = "http://avatars.io/facebook/" + obj[prop] + "?size=medium";
                return imageUrl;
              }
            }
          }
      }
    }
  },

  render: function() {
    var messageListRender = <p className="wrapper">No messages</p>;
    if (this.state.messageList.length) {
      messageListRender = this.state.messageList.map(function(item, i) {
        console.log('item', item);
        var avatarPath = this.getAvatarPath(item.fromUser);
        return (
          <li className="table-view-cell media">
            <a className="" href="/messages/detail" data-transition="slide-in">
              <img className="media-object pull-left"
                src={avatarPath}
                alt="Placeholder" />
              <div className="media-body">
                {item.fromUser.fullName}
                <p>{item.message}</p>
              </div>
            </a>
          </li>
        );
      }.bind(this));
    }

    return (
      <div>
        <Header navActive="4" isHeader="true"
          plusHref="/activ/new" />

        <div className="container content">
          <h6 className="small-title">Messages</h6>
          <ul className="table-view table-view-custom user-list user-message-list">
            {messageListRender}
          </ul>

          <div className="input-group">
            <input type="text" name="message" className="input-content"
              placeholder="write your message..."
              value={this.state.message}
              onChange={this.handleChange} />
            <button className="btn btn-positive" onClick={this.submitMessage}>SEND</button>
          </div>

        </div>
      </div>
    );
  }
});
