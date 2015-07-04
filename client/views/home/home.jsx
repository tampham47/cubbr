
// var IncludeTemplate = React.createClass({
//   componentDidMount: function() {
//     var componentRoot = React.findDOMNode(this);
//     var parentNode = componentRoot.parentNode;
//     parentNode.removeChild(componentRoot);
//     return Blaze.render(this.props.template, parentNode);
//   },

//   render: function(template) {
//     return (<div />)
//   }
// });

HomeTpt = ReactMeteor.createClass({
  templateName: 'HomeTpt',

  startMeteorSubscriptions: function() {
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
  },

  render: function() {
	return (
	  	<div>
			<Header title="Header" isHeader="true" />
			<section className="container">
				<div className="page-content">
					<p>Site map!</p>

					<a href="/login">Login</a><br/>
					<a href="/update-profile">update profile</a><br />

          <br /><br />
          <a href="/activ">Activities</a><br />
          <a href="/topics">Topics</a><br />
          <a href="/users">Users</a><br />
          <a href="/messages">Messages</a><br />
		  		</div>
			</section>
	  	</div>
	);
  }
});
