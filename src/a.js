import React,{Fragment} from 'react';
import {observer,useLocalStore} from 'mobx-react';

const Add=observer((props)=>{
    const mdl=useLocalStore(()=>({
        name:'',
        qq:'',
        save:()=>{
            props.mdl.addNew(mdl.qq,mdl.name)
        },
        cancel:()=>{
            props.mdl.showAdd=!props.mdl.showAdd
        }
    }))
    return(
        <Fragment>
            <p>姓名:<input type="text" defaultValue={mdl.name} onChange={(e)=>mdl.name=e.target.value}/></p>
            <p>qq:<input type="text" defaultValue={mdl.qq} onChange={(e)=>mdl.qq=e.target.value}/></p>
            <button onClick={mdl.save}>保存</button>
            <button onClick={mdl.cancel}>取消</button>
        </Fragment>
    )
})

const Home=observer(()=>{
    const mdl=useLocalStore(()=>({
        showAdd:false,
        qq:'',
        addNew:(qq,name)=>{
            // return(
            //     <Fragment>
            //         <tbody>
            //         <tr>
            //             <td>{name}</td>
            //             <td>{qq}</td>
            //             <td>删除</td>
            //             <td>修改</td>
            //         </tr>
            //         </tbody>
            //     </Fragment>
            // )
            console.log(qq,name)
        }
    }))
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
            <button onClick={()=>mdl.showAdd=~mdl.showAdd}>添加</button>
            {mdl.showAdd&&(
                <Add mdl={mdl}/>
            )}
        </Fragment>
    )
})
export default Home;