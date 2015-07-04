ActivListTpt = ReactMeteor.createClass({
	templateName: 'ActivListTpt',

	startMeteorSubscriptions: function() {
	},

  // Make sure your component implements this method.
  getMeteorState: function() {
    // var location = LocationService.getCurrentPosition();
    // console.log('location', location);
    LocationService.getCurrentPosition(function(pos) {
      console.log('pos', pos);
    });
  },

  render: function() {
		return (
			<div>
        <Header title="Activities" />
        <div className="container content">
          <ul className="table-view">
            <li className="table-view-cell table-view-divider">
              <span className="text-center">Activities arround 1.5km</span>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Argo
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Skyfall: 007
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Wreck-it Ralph
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Argo
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Skyfall: 007
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Wreck-it Ralph
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Argo
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Skyfall: 007
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Wreck-it Ralph
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Argo
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Skyfall: 007
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Wreck-it Ralph
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Argo
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Skyfall: 007
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Wreck-it Ralph
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Argo
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Skyfall: 007
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a className="navigate-right" href="/activ/detail" data-transition="slide-in">
                <img className="media-object pull-left" src="images/thumbnail_64x64.png" alt="Placeholder" />
                <div className="media-body">
                  Wreck-it Ralph
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
		);
	}
});
