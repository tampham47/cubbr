
TopicsListTpt = ReactMeteor.createClass({
  templateName: 'TopicsListTpt',

  startMeteorSubscriptions: function() {
    Meteor.subscribe('Topics.getByLocation');
  },

  getMeteorState: function() {
    var topicList = Topics.find({}).fetch();
    console.log('topicList', topicList);
    return {
      topicList: topicList
    };
  },

  getInitialState: function() {
    return {
      topicList: []
    };
  },

  render: function() {
    var topicListRender = <p className="wrapper">No topics</p>;

    if (this.state.topicList.length) {
      topicListRender = this.state.topicList.map(function(item, i) {
        return (
          <li className="table-view-cell media">
            <a className="navigate-right" href={"/topics/detail/" + item._id}
              data-transition="slide-in">
              <div className="media-body">{item.topicName}</div>
            </a>
          </li>
        );
      });
    }

    return (
      <div>
        <Header navActive="2" isHeader="true"
          plusHref="/activ/new" />

        <div className="container content">
          <h6 className="small-title">
            Topics arround 0.5km
            <a href="/topics/new" className="btn-new-topic pull-right">NEW TOPIC</a>
          </h6>

          <ul className="table-view table-view-topic topic-list">
            {topicListRender}
          </ul>
        </div>
      </div>
    );
  }
});
