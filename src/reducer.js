import * as GitOperations from './services/gitOperations';
const $gitOpz1 = GitOperations.default.prototype;
// const $gitOpz1 = new GitOperations();
const actionz = require('./actions.js');
//  import { state } from './store';
const state = require('./store.js');


export const store = Redux.createStore(findReducer, state)


export function findReducer(currentState, action) {
    var nextState = {
    }
    switch (action.type) {
/*        
        case 'ADD':
            let newTodo = {};
            newTodo.todoText = document.getElementById('inputTodoText').value;
            newTodo.todoDeleteButtonId = 'btnDelete-' + nextState.counter++;
            nextState.todoList = [ ...currentState.todoList, newTodo ];
            // window.localStorage.setItem('currentState', JSON.stringify(nextState));
            return nextState;
            break;
        case 'DELETE':
            let deletedBtnId = action.btnDeleteId;
            nextState.todoList = [ ...currentState.todoList ];
            nextState.counter = currentState.counter;
            let foundTodoToBeDeleted = nextState.todoList.find( todo => todo.todoDeleteButtonId === deletedBtnId );
            nextState.splice(foundTodoToBeDeleted);
            // window.localStorage.setItem('currentState', JSON.stringify(nextState))
            return nextState;
            break;
        case 'RESET':
            nextState.count = 0;
            window.localStorage.setItem('currentState', JSON.stringify(nextState))
            return nextState;
            break;
*/            

            case 'createRepo':
            var gitResponse = $gitOpz1.gitResponse;
            var newRepo={};
            newRepo.id="id-123";
            newRepo.command=document.getElementById('userTextBox').value;
            newRepo.data={};
            newRepo.data.repoName="repo-123";
            newRepo.data.repoDesc="repo-desc--123";

            nextState.createRepo=[ ...currentState.createRepo,newRepo];
            nextState.viewIssues=[ ...currentState.viewIssues];
            console.log(nextState);
            // window.localStorage.setItem('currentState', JSON.stringify(nextState));
            return nextState;
            break;

            case 'viewIssues':
            let newState = {};
            newTodo.todoText = document.getElementById('inputTodoText').value;
            newTodo.todoDeleteButtonId = 'btnDelete-' + nextState.counter++;
            nextState.todoList = [ ...currentState.todoList, newTodo ];
            // window.localStorage.setItem('currentState', JSON.stringify(nextState));
            return nextState;
            break;



        default:
            return currentState;
    }
 }


 store.subscribe(render);

 function render() {
   // todoAll.innerHTML = '';
   //  populateAllTodos();
 }