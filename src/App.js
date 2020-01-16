import React, {Component} from 'react';
import './App.css';

class ToDoItem extends Component {
    static defaultProps = {
        done: false
    }

    state = {
        done: this.props.done
    }

    toggleDone = () => {
        this.setState({done: !this.state.done})
    }

    render() {
        const {text} = this.props
        return (
            <div onClick={this.toggleDone} className={this.state.done ? 'doneTodo' : ''}>
                <p>{text}</p>
            </div>
        );
    }
}

class ToDoList extends Component {
    state = {
        tasks: this.props.tasks,
        draft: ''
    };

    updateDraft = event => {
        this.setState({draft: event.target.value})
    };

    addToDo = () => {
        const {tasks, draft} = this.state      // Niezrozumiałe
        const list = tasks
        list.push(draft)
        this.setState({tasks: list, draft: ''})
    };

    render() {
        const {title} = this.props
        const {tasks, draft} = this.state
        return (
            <div>
                <h1>{title}</h1>
                {tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}
                <input type='text' onChange={this.updateDraft} value={draft}/>
                <button onClick={this.addToDo}>Dodaj</button>
            </div>
        )
    }
}

class App extends Component {
    myTasks = [
        {done: true, text: 'Zjeść obiad'},
        {done: false, text: 'Jechać na stok'},
        {done: true, text: 'Prywatna opieka medyczna'}
    ]

    render() {
        return (
            <div>
                <ToDoList title='Bartosz Pedał' tasks={this.myTasks}/>
            </div>
        )
    }
}

export default App;
