<template>
  <div class="content">
    <div class="btn-wrap">
      <button class="btn primary">上传文件</button>
      <button class="btn light">新建文件夹</button>
      <button class="btn danger">批量删除</button>
    </div>
    <div class="file-card">
      <div class="file-title">全部文件</div>
      <div class="file-head">
        <!-- 全选 -->
        <div>
          <input type="checkbox" />
        </div>
        <div>文件名</div>
        <div>修改时间</div>
        <div>大小</div>
        <div>操作</div>
      </div>
      <div class="file-list-wrap">
        <table class="file-list">
          <tbody>
            <!-- 文件夹结构示例 -->
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <span class="file-icon folder"></span>
                文件夹1
              </td>
              <td>2023-11-11 11:11</td>
              <td>-</td>
              <td>
                <button>删除</button>
              </td>
            </tr>
            <!-- 文件结构示例 -->
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <span class="file-icon file"></span>
                文件1
              </td>
              <td>2023-11-11 11:11</td>
              <td>-</td>
              <td>
                <button>删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.content {
  flex: 1;
}

.file-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.file-head {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  font-size: 14px;
}

.file-head > div {
  flex: 1;
  border-bottom: 1px solid #e7eaef;
  color: rgba(0, 0, 0, 0.4);
  padding: 14px;
  height: auto;
  text-align-last: left;
  color: #818999;
  font-size: 12px;
  font-weight: 700;
}

.file-head div:first-of-type {
  flex-grow: 0;
}

.file-list-wrap {
  flex: 1;
  overflow: auto;
  background-color: #fff;
}

.file-list {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
  position: relative;
}

.file-list tr {
  font-size: 14px;
  outline: 0 none;
}

.file-list tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}

.file-list tr:hover {
  background-color: #f7f9fc;
}

td,
th {
  border-bottom: 1px solid #e7eaef;
  color: rgba(0, 0, 0, 0.9);
  padding: 14px;
  height: auto;
  text-align-last: left;
}

.file-list td {
  vertical-align: middle;
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 12px;
}

.file-list td:first-of-type {
  width: 12px;
}

.file-list td .file-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;
}

.file-list td .folder {
  background: url("../assets/folder.png") no-repeat center/cover;
}

.file-list td .file {
  background: url("../assets/file.png") no-repeat center/cover;
}

.file-list tbody td button {
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: #006eff;
  min-width: 24px;
  margin-right: 12px;
  float: left;
  margin-top: 2px;
}

.btn-wrap {
  height: 48px;
  line-height: 48px;
  padding: 12px 0 0;
}

.btn-wrap .btn {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #495366;
  height: 32px;
  background: #f1f3f8;
  padding: 0 24px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 16px;
  margin-top: 12px;
  margin-left: 16px;
  border: none;
}

.btn-wrap .primary {
  color: #fff;
  background-color: #06a7ff;
}

.btn-wrap .light {
  color: #06a7ff;
  background-color: #f0faff;
}

.btn-wrap .danger {
  color: #06a7ff;
  background-color: #f0faff;
}

.file-title {
  padding: 12px 16px 24px;
  font-size: 12px;
  color: #03081a;
  font-weight: 700;
}

.file-card input {
  border: 1px solid #dcdfe6;
}
</style>