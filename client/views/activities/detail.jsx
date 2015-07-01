
ActivDetailTpt = ReactMeteor.createClass({
	templateName: 'ActivDetailTpt',

	startMeteorSubscriptions: function() {
	},

	// Make sure your component implements this method.
	getMeteorState: function() {
	},

	render: function() {
		return (
			<div>
				<Header type="activities"/>
				<section className="content page-content-container has-tabs">

					<div className="chat-input">
						<textarea className="input" name="msg"></textarea>
					</div>
				</section>
			</div>
		);
	}
});
