// header component
List = React.createClass({

	statics: {
		header: null
	},

	componentWillMount: function () {

	},

	render: function() {
		var type = this.props.type;

		return (<div className="list">
				<h3 className="list__title">List title</h3>
				<ul className="table-view">
					<li className="table-view-cell media">
						<a className="navigate-right">
							<img className="media-object pull-left item-img" src="images/doraemon.png" />
					  		<div className="media-body">
								Item 1
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
					  		</div>
						</a>
				  	</li>
					<li className="table-view-cell media">
						<a className="navigate-right">
							<img className="media-object pull-left item-img" src="images/doraemon.png" />
					  		<div className="media-body">
								Item 1
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
					  		</div>
						</a>
				  	</li>
					<li className="table-view-cell media">
						<a className="navigate-right">
							<img className="media-object pull-left item-img" src="images/doraemon.png"/>
					  		<div className="media-body">
								Item 1
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>
					  		</div>
						</a>
				  	</li>
				</ul>
			</div>);
	}
});
