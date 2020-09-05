import React,{Component} from 'react';
import update from 'immutability-helper';
// import ReactDOM from 'react-dom';
// import {observer} from 'mobx-react';
// import { observable ,computed} from "mobx";

class home extends Component{
    constructor(props){
        super(props);
        this.state= {
            list: [],
            show:false,
            names:'',
            qqs:'',
            index:'',
            newObj:''
        }
    }
    //增加
    add=()=>{
        this.setState({
            list:update(this.state.list,{$push:[{name:[this.refs.name.value],qq:[this.refs.qq.value]}]})
        },()=>{
            // console.log(this.state.list);
            this.refs.name.value=this.refs.qq.value=''
        })
    }
    //删除
    delete=(index)=>{
        this.setState({
            list:update(this.state.list,{$splice:[[index,1]]})
        },()=>{
            console.log(index)
        })
    }
    //修改
    amend=(index)=>{
        this.setState({
            names:this.state.list[index].name,
            qqs:this.state.list[index].qq,
            index:index
        },()=>{
            console.log(this.state.list[index],index)
        })
    }
    //保存
    save=()=>{
        this.setState({
            show:true,
            newObj:{name:[this.refs.newName.value],qq:[this.refs.newQq.value]},
            list:update(this.state.list,{$splice:[[this.state.index,1,this.state.newObj]]})
        },()=>{
            console.log(this.state.index,this.state.newObj,this.state.list);
        })
}
//取消
    cancel=()=>{
        this.setState({
            show:false,
        },()=>{
            console.log('取消')
        })
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="输入姓名" ref="name"/><br/>
                <input type="text" placeholder="输入qq号" ref="qq"/>
                <button onClick={this.add}>添加</button>
                <table className="table">
                   <thead>
                       <tr>
                           <td>姓名</td>
                           <td>qq</td>
                           <td>操作</td>
                           <td>操作</td>
                       </tr>
                   </thead>
                    <tbody>
                {this.state.list.map((item,index)=>{
                    return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.qq}</td>
                                <td><button onClick={()=>this.delete(index)}>删除</button></td>
                                <td><button onClick={()=>this.amend(index)}>修改</button></td>
                            </tr>
                    )
                })}
                    </tbody>
                </table>

                <div className="window" show={this.state.show?1:0}>
                    <p>姓名:<input type="text" defaultValue={this.state.names} ref="newName" /></p>
                    <p>qq:<input type="text" defaultValue={this.state.qqs} ref="newQq"/></p>
                    <button onClick={this.save}>保存</button>
                    <button onClick={this.cancel}>取消</button>
                </div>

            </div>
        )
    }
}
export default home;

// import { decorate, observable } from "mobx";
//
// class Todo {
//     id = Math.random();
//     title = "";
//     finished = false;
// }
// decorate(Todo, {
//     title: observable,
//     finished: observable
// });


// class TodoList {
//     @observable todos = [];
//     @computed get unfinishedTodoCount() {
//         return this.todos.filter(todo => !todo.finished).length;
//     }
// }
//
// @observer
// class TodoListView extends Component {
//
//     render() {
//         return <div>
//             <ul>
//                 {this.props.todoList.todos.map(todo =>
//                     <TodoView todo={todo} key={todo.id} />
//                 )}
//             </ul>
//             Tasks left: {this.props.todoList.unfinishedTodoCount}
//         </div>
//     }
// }
//
// const TodoView = observer(({todo}) =>
//     <li>
//         <input
//             type="checkbox"
//             checked={todo.finished}
//             onClick={() => todo.finished = !todo.finished}
//         />{todo.title}
//     </li>
// )
//
// //
// const store = new TodoList();
// export  default  TodoListView;
// // ReactDOM.render(<c todoList={store} />, document.getElementById('mount'));