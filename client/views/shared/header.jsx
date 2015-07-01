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
				this.rightSide = (<div className="action-list"><a href="" className="ib vm"><i className="fa fa-plus"></i></a><a href="" className="ib vm message-btn"><i className="fa fa-comment-o"></i></a></div>);
				break;
			case 'activities-new':
				this.leftSide = (<a href="">Hủy</a>);
				this.center = 'Đăng hoạt động';
				this.rightSide = (<a href="">Đăng</a>);
				break;
			default:
		}
	},

  	render: function() {
  		var type = this.props.type;

    	return (<header className="header">
    			<ul className="header__list flex sp-between v-center">
    				<li className="flex-item left-side">{this.leftSide}</li>
    				<li className="flex-item center">{this.center}</li>
    				<li className="flex-item right-side">{this.rightSide}</li>
    			</ul>
    		</header>);
  	}
});
