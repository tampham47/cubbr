// header component
Header = React.createClass({

	statics: {
		header: null
	},

	componentWillMount: function () {
		var type = this.props.type || 'login';

		switch (type) {
			case 'login':
				this.header = (<ul className="header__list">
								<li><a href="/" className="logo">Cubbr</a></li>
								<li>Thông tin ?</li>
							</ul>);
				break;
			default:
		}
	},

  	render: function() {
  		var type = this.props.type;

    	return (<header className="header">
    			{ this.header }
    		</header>);
  	}
});
