// header component
Header = React.createClass({

	statics: {
		header: null
	},

	componentWillMount: function () {
		var type = this.props.type || 'login';

		switch (type) {
			case 'login':
				this.leftSide = (<a href="/" className="logo">Cubbr</a>);
				this.rightSide = 'Thông tin ?';

				break;
			case 'update-profile':
				this.center = 'Cập nhật thông tin';
				this.rightSide = (<i className="fa fa-angle-right"></i>);
				break;
			case 'activities':
				this.leftSide = (<a href="/" className="logo">Cubbr</a>);
				this.rightSide = (<div><i className="fa fa-plus ib vm"></i><div className="ib vm"><i className="fa fa-comment-o"></i></div></div>);
				break;
			default:
		}
	},

  	render: function() {
  		var type = this.props.type;

    	return (<header className="header">
    			<ul className="header__list">
    				<li className="left-side">{this.leftSide}</li>
    				<li className="center">{this.center}</li>
    				<li className="right-side">{this.rightSide}</li>
    			</ul>
    		</header>);
  	}
});
