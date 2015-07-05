TopicsDetailTpt = ReactMeteor.createClass({
  templateName: 'TopicsDetailTpt',

  startMeteorSubscriptions: function() {
    var topicId = Router.current().params.id;
    Meteor.subscribe('Activities.getByTopic', topicId);

    Meteor.subscribe('Users.getByLocation');
  },

  getMeteorState: function() {
    var topicId = Router.current().params.id;
    var activList = Activities.find({}).fetch();
    return {
      activList: activList
    };
  },

  getInitialState: function() {
    var topicId = Router.current().params.id;
    Meteor.call('Topics.getById', topicId, function(err, data) {
      if (err) {
        return;
      }
      Session.set('currentTopic', data);
      this.setState({currentTopic: data});
    }.bind(this));

    return {
      activList: [],
      currentTopic: {}
    };
  },

  render: function() {
    var activListRender = <p className="wrapper">No activities</p>;
    var imageUrl = "/images/thumbnail_64x64.png";

    if (this.state.activList.length) {
      activListRender = this.state.activList.map(function(item, i) {
        console.log('item: ', item);
        var user = Meteor.users.findOne({_id: item.userId});
        console.log(user.services);
        if (user.services) {
          for (var key in user.services) {
            if (user.services.hasOwnProperty(key)) {
               var obj = user.services[key];
                for (var prop in obj) {
                  if(obj.hasOwnProperty(prop)) {
                    if (prop === 'id') {
                      imageUrl = "http://avatars.io/facebook/" + obj[prop] + "?size=medium";
                      break;
                    }
                  }
               }
            }
          }
        }

        return (
          <li className="table-view-cell media">
            <a className="navigate-right" href={"/activ/detail/" + item._id} data-transition="slide-in">
              <img className="media-object pull-left" src={imageUrl} alt="Placeholder" />
              <div className="media-body">
                {item.fullName}
                <p>{item.content}</p>
              </div>
            </a>
          </li>
        );
      });
    }

    return (
      <div>
        <Header navActive="2" isHeader="true"
          plusHref="/activ/new" />

        <div className="container">
          <h6 className="small-title small-title-topic">{this.state.currentTopic.topicName}</h6>
          <ul className="table-view table-view-activ">
            {activListRender}
          </ul>
        </div>
      </div>
    );
  }
});
