ActivListTpt = ReactMeteor.createClass({
	templateName: 'ActivListTpt',

	startMeteorSubscriptions: function() {
    Meteor.subscribe('Activities.getByLocation');
    Meteor.subscribe('Users.getByLocation');
	},

  getInitialState: function() {
    Session.set('currentTopic', null);

    return {
      activList: [],
    };
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
    var userList = [];
    var activList = Activities.find({}).fetch();

    console.log(activList);


    // console.log('before activList', activList);
    // _.forEach(activList, function(item, i) {
    //   console.log('activList', i, item.userId);
    //   if (userList[item.userList]) {
    //     item.user = userList[item.userList];
    //   } else {
    //     Meteor.call('Users.getById', item.userId, function(err, data) {
    //       if (err) {
    //         return;
    //       }
    //       console.log('data', i, data);
    //       userList[item.userId] = data;
    //       // return data;
    //       item.user = data;
    //     });
    //   }
    // });

    return {
      activList: activList
    };
  },

  render: function() {
    var listItem = '';
    var imageUrl = "../images/thumbnail_64x64.png";

    if (this.state.activList.length) {
      listItem = this.state.activList.map(function (item, i) {
        // get avatar okie
        // var user = Meteor.users.findOne({_id: item.userId});
        // for (var key in user.services) {
        //   if (user.services.hasOwnProperty(key)) {
        //      var obj = user.services[key];
        //       for (var prop in obj) {
        //         if(obj.hasOwnProperty(prop)) {
        //           if (prop === 'id') {
        //             imageUrl = "http://avatars.io/facebook/" + obj[prop] + "?size=medium";
        //             break;
        //           }
        //         }
        //      }
        //   }
        // }

        return (
          <li className="table-view-cell media">
            <a className="navigate-right" href={"/activ/detail/" + item._id} data-transition="slide-in">
              <img className="media-object pull-left" src={imageUrl} alt="Placeholder" />
              <div className="media-body">
                {item.username}
                <p>{item.content}</p>
              </div>
            </a>
          </li>
        );
      });
    }

		return (
			<div>
        <Header navActive="1" isHeader="true"
          plusHref="/activ/new" />
        <div className="container content">
          <h6 className="small-title">Activities around 1.5km</h6>
          <ul className="table-view table-view-activ">
            {listItem}
          </ul>
        </div>
      </div>
		);
	}
});
