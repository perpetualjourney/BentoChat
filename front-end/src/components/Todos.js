'use strict';

var React = require('react/addons'),
    RouteHandler = require('react-router').RouteHandler,
    TodoActions = require('../actions/todoActions'),
    TodoStore = require('../stores/TodoStore');

require('styles/Todos.sass');
var Link = require('react-router').Link;

var ReactTransitionGroup = React.addons.TransitionGroup;

var Todo = React.createClass({

    _onSubmit: function(e) {
        e.preventDefault();
        var id = this.props.todo.id;
        if (id) {
            TodoActions.toggleTodo(id);
        }
    },

    _onArchive: function(e) {
        console.log(this.props.todo.id);
      e.preventDefault();
        var id = this.props.todo.id;
        if (id) {
            TodoActions.archiveTodo(id);
        }
    },

    render: function() {
        return (
            <div className="todo">
                <div className="todo-content">
                    <div className="todo-title">
                        {this.props.todo.title}
                    </div>
                    <div className="todo-desc">
                        <span className="glyphicon glyphicon-menu-right icon"></span>
                        {this.props.todo.text}
                    </div>
                    <div className="todo-assignee">
                        <span className="glyphicon glyphicon-user icon"></span>
                        {this.props.todo.author}
                    </div>
                </div>

                <div className="complete-button">
                    <button onClick={this._onSubmit} className="btn btn-default btn-block todo-btn">
                        <span className="glyphicon glyphicon-ok todo-tick"></span>
                    </button>
                    <button onClick={this._onArchive} className="btn btn-warning btn-block archive-btn">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                </div>
            </div>
        );
    }});

function returnTodo(todo) {
    return (
        <Todo
            key={todo.id}
            todo={todo}
            />
    );
}

var TodoList = React.createClass({
    render: function() {
        var TodoListItem
            = this.props.list.map(returnTodo);
        return (
            <div>
                {TodoListItem}
            </div>
        );
    }
});

var TodoBar = React.createClass({
    render: function () {
        return (
            <div>
                <Link to="todo-new" className="btn btn-info btn-block" activeClassName="disabled">
                    New
                </Link>
            </div>
        );
}
});

function getStateFromStores() {
    return {
        completed: TodoStore.getCompleted(),
        pending: TodoStore.getPending()
    };
}

var Todos = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange);
        TodoActions.fetchTodos();
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    },

    render: function() {
        return (
            <div className="todo-body">
                <div className="test">
                    <RouteHandler />
                    <div className="todos-content">
                        <div className="todo-list">
                            <div className="title" align="center">
                                Todos:
                            </div>
                            <TodoList list={this.state.pending} className="todo-list"/>
                        </div>
                        <div className="completed-list">
                            <div className="title">
                                Completed:
                            </div>
                            <TodoList list={this.state.completed} className="completed-list"/>
                        </div>
                    </div>
                </div>
                <div className="todo-nav">
                    <TodoBar />
                </div>
                <div className="todo-side">
                    profile information
                </div>
            </div>
        );
    }
});

module.exports = Todos;
