// header component
Tabs = React.createClass({

	statics: {
		header: null
	},

	componentWillMount: function () {

	},

		render: function() {
			var type = this.props.type;

			return (<ul className="tabs">
						<li className={"item" + (this.props.active === 'activities' ? ' active' : '') }>Activities</li>
						<li className={"item" + (this.props.active === 'topics' ? ' active' : '') }>Topics</li>
						<li className={"item" + (this.props.active === 'user' ? ' active' : '') }>User</li>
						<li className={"item" + (this.props.active === 'message' ? ' active' : '') }>Message</li>
					</ul>);
		}
});
