var React = require('react');
var Header = require('./Header');
var TopicList = require('./Topic-list');

var Main = React.createClass({
    content: function () {
        if(this.props.children){
            return this.props.children;
        } else {
            return <TopicList />;
        }
    },

    render: function () {
        return (
            <div>
                <Header />
                {this.content()}
            </div>
        );
    }
});

module.exports = Main;