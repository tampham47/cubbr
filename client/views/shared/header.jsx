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

    	return (
        <header className={"bar bar-nav header " + (this.props.class)}>
          <h1 className="title">{this.props.title}</h1>
          {/*<a href="#" className="icon icon-download pull-right"></a>
            <a href="#" className="icon icon-plus pull-right"></a>*/}

          <a href="#"
            className={"icon icon-close pull-left " + (this.props.left!==undefined?"":"hidden")}
            onClick={this.props.leftMethod}></a>
          <a href="#"
            className={"icon icon-right-nav pull-right " + (this.props.right!=undefined?"":"hidden")}
            onClick={this.props.rightMethod}></a>
        </header>
      );
    }
});

// <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":"hidden")}></a>
// <a href="#" className={"icon icon-close pull-left" + (this.props.leftState==="cancel"?"":"hidden")}></a>
// <a href="javascript:;" onClick={this.rightAction} className={"icon icon-check pull-right " + (this.props.rightState==="publish"?"":"hidden")}></a>
// <a href={this.props.link} className={"icon icon-plus pull-right " + (this.props.state==="new"?"":"hidden")}></a>
// <a href={this.props.link} className={"icon icon-list pull-right " + (this.props.filter==="true"?"":"hidden")}></a>
