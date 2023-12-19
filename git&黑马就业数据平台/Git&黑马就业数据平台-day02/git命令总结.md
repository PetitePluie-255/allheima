# git 命令总结

1. git 是一个版本控制系统 - 管理项目

2. 初始化项目

   ```bash
   git init 
   ```

3. 设置用户名和邮箱

   ```bash
   git config --global user.name 'xxx'
   git config --global user.email 'xxx'
   git config --list
   ```

4. git的三个区

   ```bash
   工作区
   暂存区
   版本库 / 仓库区 
   工作区 -> 暂存区 git add . 
   暂存区 -> 仓库区 git commit -m '版本说明'
   ```

5. 查看提交记录

   ```bash
   git log 
   git log --oneline 精简版
   git reflog 查看所有的版本
   ```

6. 回退版本

   ```bash
   git reset --hard 版本号
   ```

7. git分支 

   ```bash
   // 创建
   git branch 新分支名
   // 查看分支列表
   git branch
   // 切换分支
   git checkout 分支名
   //删除分支
   git branch -d 分支名
   // 强制删除
   git branch -D 分支名
   // 创建并切换分支
   git checkout -b 新分支名  ==== git branch 分支名 + git checkout 分支名
   // 合并分支
   git merge 分支名 
   ```

8. 解决冲突 

   ```bash
   // 不同的分支对相同文件相同位置做了不同的修改
   // git将解决冲突的能力交给了开发 - 让自己去处理
   // 1. 将代码保留双方提交的/ 或者其中一方 
   // 2. 再次提交一次 git add . + git commit -m '解决冲突'
   ```

9. 远程仓库

   ```bash
   // 托管项目的平台 
   // Github (个人) Gitee (个人) Gitlab (企业级)
   ```

10. 提交到远程仓库

    ```bash
    git push 
    ```

11. 克隆代码 - 进入公司

    ```bash
    git clone 仓库地址 可选的文件夹名字
    ```

12. 更新差异 / 拉取 - 早晨进公司 保证本地仓库的代码和远程仓库代码一致....

    ```bash
    git pull 
    ```

    