// header component
Header = React.createClass({

	startMeteorSubscriptions: function() {
  },

  // Make sure your component implements this method.
  getMeteorState: function() {
  },

	componentWillMount: function () {
	},

	render: function() {
    var type = this.props.type;
    var topNav = '';

    if (this.props.isTopNav !== "false") {
      topNav = (
        <div className="segmented-control">
          <a className={"control-item " + (this.props.navActive==="1"?"active":"")}
            href="/activ">Activities
          </a>
          <a className={"control-item " + (this.props.navActive==="2"?"active":"")}
            href="/topics">Topics
          </a>
          <a className={"control-item " + (this.props.navActive==="3"?"active":"")}
            href="/users">Users
          </a>
          <a className={"control-item " + (this.props.navActive==="4"?"active":"")}
            href="/histories">Histories
          </a>
        </div>
      );
    }

    return (
      <div>
        <header className={"bar bar-nav header " + (this.props.class)}>
          <h1 className="title">{(this.props.title!=null?this.props.title:"Cubbr")}</h1>

          <a href="#"
            className={"icon icon-download pull-right rm-right " + (this.props.isHeader==="true"?"":"hidden")}></a>
          <a href={this.props.plusHref}
            className={"icon icon-plus pull-right " + (this.props.isHeader==="true"?"":"hidden")}></a>

          <a href="#"
            className={"icon icon-close pull-left rm-left " + (this.props.left!=null?"":"hidden")}
            onClick={this.props.leftMethod}></a>
          <a href="#"
            className={"icon icon-right-nav pull-right rm-right " + (this.props.right!=null?"":"hidden")}
            onClick={this.props.rightMethod}></a>
        </header>

        {topNav}
      </div>
    );
  }
});
