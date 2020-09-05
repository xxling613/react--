import React,{Fragment} from 'react';
// Component
//import {Fra} from Component;
// import update from 'immutability-helper';
// import ReactDOM from 'react-dom';
import {observer,useLocalStore} from 'mobx-react';
// import { observable ,computed} from "mobx";



const Add=observer((props)=>{
    const mdl=useLocalStore(()=>({
        name:'',
        qq:"",
        save:()=>{
            console.log(mdl.qq,mdl.name);
            props.mdl.addNew(mdl.qq,mdl.name);
            // return(
            //     <Fragment>
            //         <tbody>
            //         <tr>
            //             <td>{mdl.name}</td>
            //             <td>{mdl.qq}</td>
            //             <td>删除</td>
            //             <td>修改</td>
            //         </tr>
            //         </tbody>
            //     </Fragment>
            // )
        },

        cancel:()=>{
            props.mdl.showAdd= !props.mdl.showAdd
        }

    }))
    return(
        <Fragment>
            <p>姓名:<input type="text" defaultValue={mdl.name} onChange={(e)=>mdl.name=e.target.value}  /></p>
            <p>qq:<input type="text" defaultValue={mdl.qq} onChange={(e)=>mdl.qq=e.target.value} /></p>
            <button onClick={mdl.save}>保存</button>
            <button onClick={mdl.cancel}>取消</button>
        </Fragment>

    )
})
const Home2=observer(()=>{
    const mdl=useLocalStore(()=>({
        showAdd:false,
        qq:"",
        addNew:(qq,name)=>{
            // console.log('d2');
            console.log(qq,name)
        }
    }));
    return(
        <Fragment>
            <table className="table">
                <thead>
                <tr>
                    <td>姓名</td>
                    <td>qq</td>
                    <td>操作</td>
                    <td>操作</td>
                </tr>
                </thead>
            </table>

            <button onClick={()=>mdl.showAdd=~mdl.showAdd}>
                add
            </button>

            {mdl.showAdd&&(
                <Add mdl={mdl}/>
            )}

        </Fragment>        );
})
// class home extends Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             list: [],
//             show:false
//
//         }
//     }
//     //增加
//     add=()=>{
//         this.setState({
//             list:update(this.state.list,{$push:[{name:[this.refs.name.value],qq:[this.refs.qq.value]}]})
//         },()=>{
//             // console.log(this.state.list);
//             this.refs.name.value=this.refs.qq.value=''
//         })
//     }
//     //删除
//     delete=(index)=>{
//         this.setState({
//             list:update(this.state.list,{$splice:[[index,1]]})
//         },()=>{
//             console.log(index)
//         })
//     }
//     //修改
//     amend=(index)=>{
//         this.setState({
//             names:this.state.list[index].name,
//             qqs:this.state.list[index].qq,
//             index:index
//         },()=>{
//             console.log(this.state.list[index],index)
//         })
//     }
//     //保存
//
//     render(){
//         return(
//             <div>
//                 <input type="text" placeholder="输入姓名"   /><br/>
//                 <input type="text" placeholder="输入qq号"  ref={()=>'newQq'}/>
//                 <button onClick={this.add}>添加</button>
//                 <table className="table">
//                    <thead>
//                        <tr>
//                            <td>姓名</td>
//                            <td>qq</td>
//                            <td>操作</td>
//                            <td>操作</td>
//                        </tr>
//                    </thead>
//                     <tbody>
//                 {this.state.list.map((item,index)=>{
//                     return(
//                             <tr key={index}>
//                                 <td>{item.name}</td>
//                                 <td>{item.qq}</td>
//                                 <td><button onClick={()=>this.delete(index)}>删除</button></td>
//                                 <td><button onClick={()=>this.amend(index)}>修改</button></td>
//                             </tr>
//                     )
//                 })}
//                     </tbody>
//                 </table>
//
//                 {this.state.show&&(<div className="window" >
//                     <p>姓名:<input type="text" defaultValue={this.state.names} ref="newName" /></p>
//                     <p>qq:<input type="text" defaultValue={this.state.qqs} ref="newQq"/></p>
//                     <button onClick={this.save}>保存</button>
//                     <button onClick={this.cancel}>取消</button>
//                 </div>)}
//
//             </div>
//         )
//     }
// }
export default Home2;

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