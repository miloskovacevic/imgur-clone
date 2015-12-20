var React = require('react');
var Api = require('./../utils/api');

var TopicList = React.createClass({
    getInitialState: function () {
        return {
            topics: []
        };
    },
    
    componentWillMount: function () {
        Api.get('topics/defaults')
           .then(function (data) {
                this.setState({
                    topics: data.data
                })
            }.bind(this));

    },

    renderTopics: function () {
        return this.state.topics.map(function(topic, i){
            return <li key={i}>{topic}</li>
        });
    },

    render: function () {
        return (
            <div className="list-group">
                {this.renderTopics()}
            </div>
        );
    }
});

module.exports = TopicList;