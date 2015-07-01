// header component
Header = React.createClass({

	statics: {
		header: null
	},

	componentWillMount: function () {
		var type = this.props.type || 'login';

		switch (type) {
			case 'login':
				this.leftSide = (<a href="/" className="btn btn-link pull-left">Cubbr</a>);
				this.rightSide = (<a href="/" className="btn btn-link pull-right">Thông tin ?</a>);

				break;
			case 'update-profile':
				this.center = 'Cập nhật thông tin';
				this.rightSide = (<a className="icon icon-right-nav pull-right"></a>);
				break;
			case 'activities':
				this.leftSide = (<a href="/" className="btn btn-link pull-left">Cubbr</a>);
				this.rightSide = (<div><a className="icon icon-compose pull-right"></a><a className="icon icon-plus pull-right"></a></div>); // (<div className="action-list"><a href="" className="ib vm"><i className="fa fa-plus"></i></a><a href="" className="ib vm message-btn"><i className="fa fa-comment-o"></i></a></div>);
				break;
			case 'activities-new':
				this.leftSide = (<a href="/" className="btn btn-link pull-left">Hủy</a>);
				this.rightSide = (<a href="/" className="btn btn-link pull-right">Đăng</a>);
				this.center = 'Đăng hoạt động';
				break;
			default:
		}
	},

  	render: function() {
  		var type = this.props.type;

    	return (<header className="bar bar-nav ">
    			{/*<ul className="header__list flex sp-between v-center">
    				<li className="flex-item left-side">{this.leftSide}</li>
    				<li className="flex-item center">{this.center}</li>
    				<li className="flex-item right-side">{this.rightSide}</li>
    			</ul>*/}
    			{ this.leftSide }
    			{ this.rightSide }
    			<h1 className="title">{ this.center }</h1>
    		</header>);
  	}
});
