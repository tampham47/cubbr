
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
			<section className="content page-content-container page-activities-new">
				<div className="page-content">
					<p>Site map!</p>

					<a href="/activ">activ</a><br/>
					<a href="/activ/new">activ new</a><br/>
					<a href="/activ/detail">activ detail</a><br/>
					<br/>

					<a href="/login">login</a><br/>
					<a href="/update-profile">update profile</a><br />
          <a href="/posts">Posts</a>
		  		</div>
			</section>
	  	</div>
	);
  }
});
