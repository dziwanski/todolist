import React, {Component} from 'react';

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
                {tasks.map(task => <div><p>{task}</p></div>)}
                <input type='text' onChange={this.updateDraft} value={draft}/>
                <button onClick={this.addToDo}>Dodaj</button>
            </div>
        )
    }
}

class App extends Component {
    myTasks = [
        'Zjeść obiad',
        'Jechać na stok',
        'Prywatna opieka medyczna'
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
