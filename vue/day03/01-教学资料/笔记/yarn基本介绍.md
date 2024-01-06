

# 2. 前置 - yarn 包管理器

快速、可靠、安全的依赖管理工具。和 npm 类似, 都是包管理工具, 可以用于下载包 

下载地址: https://yarn.bootcss.com/docs/install/#windows-stable 

windows本  **推荐通过软件包**  安装 (教学资料中)

```
npm i yarn -g
```

mac本通过命令全局安装

```txt
sudo npm i yarn -g
```

yarn -v 版本 下载成功



基本命令:

```text
1. 初始化
	yarn init -y

2. 添加依赖
	yarn add [package]
	yarn add [package]@[version]

3. 移除包
	yarn remove [package]
             
4. 安装项目全部依赖            
	yarn 或者 yarn install

5. 全局
	安装: yarn global add [package]
	卸载: yarn global remove [package]
```
