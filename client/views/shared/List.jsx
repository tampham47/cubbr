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
				<ul className="list__content">
					<li className="list__item">
						<a href="/activ/detail" className="item-wrap flex">
							<div className="item img"><img src="images/doraemon.png" /></div>
							<div className="item content">
								<h3 className="author">Tam Pham</h3>
								<p className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
								<span className="text-secondary">5h</span>
							</div>
							<div className="item arrow algin-self-center"><i className="fa fa-angle-right"></i></div>
						</a>
					</li>
					<li className="list__item">
						<a href="/activ/detail" className="item-wrap flex">
							<div className="item img"><img src="images/doraemon.png" /></div>
							<div className="item content">
								<h3 className="author">Tam Pham</h3>
								<p className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
								<span className="text-secondary">5h</span>
							</div>
							<div className="item arrow algin-self-center"><i className="fa fa-angle-right"></i></div>
						</a>
					</li>
					<li className="list__item">
						<a href="/activ/detail" className="item-wrap flex">
							<div className="item img"><img src="images/doraemon.png" /></div>
							<div className="item content">
								<h3 className="author">Tam Pham</h3>
								<p className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
								<span className="text-secondary">5h</span>
							</div>
							<div className="item arrow algin-self-center"><i className="fa fa-angle-right"></i></div>
						</a>
					</li>
					<li className="list__item">
						<a href="/activ/detail" className="item-wrap flex">
							<div className="item img"><img src="images/doraemon.png" /></div>
							<div className="item content">
								<h3 className="author">Tam Pham</h3>
								<p className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
								<span className="text-secondary">5h</span>
							</div>
							<div className="item arrow algin-self-center"><i className="fa fa-angle-right"></i></div>
						</a>
					</li>
				</ul>
			</div>);
	}
});
