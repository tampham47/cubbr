// header component
Tabs = React.createClass({

	statics: {
		header: null
	},

	componentWillMount: function () {

	},

		render: function() {
			var type = this.props.type;

			return (<ul className="tabs flex">
						<li className={"grow-1 item" + (this.props.active === 'activities' ? ' active' : '') }><a href="/activ">Activities</a></li>
						<li className={"grow-1 item" + (this.props.active === 'topics' ? ' active' : '') }><a href="/topics">Topics</a></li>
						<li className={"grow-1 item" + (this.props.active === 'user' ? ' active' : '') }><a href="/user">User</a></li>
						<li className={"grow-1 item" + (this.props.active === 'message' ? ' active' : '') }><a href="/msg">Message</a></li>
					</ul>);
		}
});
