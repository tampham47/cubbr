
ActivNewTpt = ReactMeteor.createClass({
	templateName: 'ActivNewTpt',

	startMeteorSubscriptions: function() {
	},

	// Make sure your component implements this method.
	getMeteorState: function() {
	},

	showLog: function() {
		console.log('show log');
	},

	render: function() {
		return (
			<div>
				<Header type="activities-new"/>
				<section className="page-content-container page-activities-new">
					<div className="page-content">
						<textarea name="post" rows="7" placeholder="Hoạt động" className="post"></textarea>
						<p className="note">* Hoạt động của bạn chỉ xuất hiện trong vòng bán kính 1,5km từ vị trí đăng</p>
					</div>
				</section>
			</div>
		);
	}
});
