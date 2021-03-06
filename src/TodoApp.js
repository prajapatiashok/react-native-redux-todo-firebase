import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
import AddTodo from './containers/AddTodo';
import TodoList from './components/TodoList';
// import VisibleTodos from './containers/VisibleTodos';

class TodoApp extends Component {

    render(){
        return (
            <View style={styles.container}>
                <AddTodo/>

                {/* displays the todo list */}
                <View>
                    <TodoList />
                </View>
            </View>
        )
    }
}

export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#387490'
    }
});