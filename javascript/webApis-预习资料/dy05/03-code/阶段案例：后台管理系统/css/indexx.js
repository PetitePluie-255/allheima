// 提供的数据
const obj = {
    success: true,
    code: 10000,
    data: [
      {
        id: 1,
        username: '管理员',
        workNumber: '10000',
        time: '2022-10-24',
      },
      {
        id: 2,
        username: '孙财',
        workNumber: '10001',
        time: '2022-09-24',
      },
      {
        id: 3,
        username: '罗晓晓',
        workNumber: '10002',
        time: '2022-08-24',
      },
      {
        id: 4,
        username: '文吉星',
        workNumber: '10003',
        time: '2022-08-25',
      },
      {
        id: 5,
        username: '巴思慧',
        workNumber: '10004',
        time: '2022-08-24',
      },
      {
        id: 6,
        username: '乔海',
        workNumber: '10005',
        time: '2022-08-22',
      },
      {
        id: 7,
        username: '董昊空',
        workNumber: '10006',
        time: '2022-08-24',
      },
      {
        id: 8,
        username: '周乐天',
        workNumber: '10007',
        time: '2022-07-24',
      },
      {
        id: 9,
        username: '吕勇锐',
        workNumber: '10008',
        time: '2022-08-17',
      },
      {
        id: 10,
        username: '袁永安',
        workNumber: '10009',
        time: '2022-08-24',
      },
    ],
    message: '获取员工列表成功',
  }
  
  // 获取表单元素
  const tbody = document.querySelector('#tbody')
  const btnAdd = document.querySelector('#btn-add')
  const btnOK = document.querySelector('#btn-ok')
  
  // 确认删除
  const delOk = document.querySelector('#del-ok')
  
  // 模态框表单系列元素
  const form = document.querySelector('#form')
  const username = form.querySelector('.username')
  const workNumber = form.querySelector('.workNumber')
  const time = form.querySelector('.time')
  
  // 模态框标题     
  const  dialog=new A11yDialog(document.querySelector('#modal') )
  const dialogTitle = document.querySelector('#my-dialog-title')
  //删除框
  const  dialogDel=new A11yDialog(document.querySelector('#modal-del'))
  // dialogDel.show()
  // todo 渲染功能
            let {data}=obj
            data=data.sort((a,b)=>b.workNumber-a.workNumber )
            console.log(data);
            function render(){
                
                tbody.innerHTML=data.map(function(ele,index){
                    const{id,
                        username,
                        workNumber,
                        time}=ele
                    return `  <tr class="el-table__row">
                    <td class="is-center">
                      <div class="cell"><span class="username">${username[0]}</span></div>
                    </td>
                    <td>
                      <div class="cell">${username}</div>
                    </td>
                    <td>
                      <div class="cell">${workNumber}</div>
                    </td>
                    <td>
                      <div class="cell">${ time}</div>
                    </td>
                    <td>
                      <div class="cell">
                        <button type="button" data-id=${id}  class="el-button hm-text btn-edit">编辑</button>
                        <button type="button"  data-id=${id} class="el-button hm-text btn-del">删除</button>
                      </div>
                    </td>
                  </tr>`
                })
            }
            render()

        //删除
        let rowId
        tbody.addEventListener('click',function(e){
                    const target=e.target
                if(target.classList.contains('btn-del')){
                    rowId=+target.dataset.id
                    console.log(rowId);
                    dialogDel.show()
                    delOk.addEventListener('click',function(){
                        data=data.filter(ele=>ele.id!==rowId)
                        dialogDel.hide()
                        tip('删除成功')
                        render()
                    })
                }
                if(target.classList.contains('btn-edit')){
                    rowId=+target.dataset.id
                    dialog.show()
                    const itemInfo=data.find(ele=>ele.id===rowId)
                    username.value=itemInfo.username
                    time.value=itemInfo.time
                    workNumber.value=itemInfo.workNumber
                }
                
        })




        btnAdd.addEventListener('click',function(){
         
            dialog.show()
           
            workNumber.value=+data[0].workNumber+1
        

              
        

        })

        btnOK.addEventListener('click',function(){
            rowId=null
            if(username.value.trim()===''){
                tip('请输入姓名')
                return
               }
               if(time.value.trim()===''){
                tip('请输入时间')
                return
               }
            const obj={
                id:+data[0].id+1,
                username:username.value,
                workNumber:+data[0].workNumber+1,
                time:time.value,
              }
            data.unshift(obj)
            dialog.hide()
            tip('添加成功')
            render()
      
  })

    function verit(flag=true){
        document.documentElement.style.overflow=flag?'auto':'hidden'
    }

    dialog.on('show',function(ele,index){
        dialogTitle.innerHTML=rowId?'编辑用户信息':'添加用户信息'
        verit(false)

    })
    dialog.on('hide',function(ele,index){
        verit()

    })


  // todo 添加功能
  
  // todo 编辑和删除功能
 