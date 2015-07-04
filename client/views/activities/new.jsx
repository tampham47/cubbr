
ActivNewTpt = ReactMeteor.createClass({
	templateName: 'ActivNewTpt',

  	startMeteorSubscriptions: function() {
    	Meteor.subscribe('Activities.getAll');
  	},

  	// Make sure your component implements this method.
  	getMeteorState: function() {
    	var activs = Activities.find({}).fetch();
    	console.log('activs', activs);
  	},

	showLog: function() {
		console.log('show log');
	},

	render: function() {
		return (
			<div>
				<Header title="Activities" type="activities-new"/>
				<section className="content page-content-container page-activities-new">
					<div className="page-content">
						<textarea name="post" rows="7" placeholder="Hoạt động" className="post"></textarea>
						<p className="note">* Hoạt động của bạn chỉ xuất hiện trong vòng bán kính 1,5km từ vị trí đăng</p>
					</div>
				</section>
			</div>
		);
	}
});
