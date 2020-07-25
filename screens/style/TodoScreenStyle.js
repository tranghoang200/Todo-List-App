import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        paddingBottom: 5,
        backgroundColor: '#F8F8F8',
    },
    newTodoContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    newTodo: {
        width: '65%',
        height: 40,
        borderBottomWidth: 3,
        fontSize: 22,
        borderBottomColor: '#0962ea',
        color: '#0962ea',
    },
    newTodoButton: {
        height: 40,
        width: 40,
        backgroundColor: '#0962ea',
        borderRadius: 20,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    todoList: {
        flex: 1,
        borderRadius: 20,
        width: '100%',
    },
});

export default styles