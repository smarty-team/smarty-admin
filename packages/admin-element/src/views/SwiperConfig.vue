<template>
  <el-card class="swiper-container">
    <div class="header">
      <el-button type="primary" size="small" :icon="IconPlus" @click="handleAdd"
        >增加</el-button
      >
      <el-popconfirm
        title="确定删除吗？"
        confirmButtonText="确定"
        cancelButtonText="取消"
        @confirm="handleDelete"
      >
        <template #reference>
          <el-button type="danger" size="small" :icon="IconDelete"
            >批量删除</el-button
          >
        </template>
      </el-popconfirm>
    </div>

    <DialogAddSwiper ref="addSwiper" :reload="getCarousels" :type="type" />
    <el-table
      v-loading="loading"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="轮播图" width="200">
        <template #default="scope">
          <img
            style="width: 150px; height: 150px"
            :src="scope.row.carouselUrl"
            alt="轮播图"
          />
        </template>
      </el-table-column>
      <el-table-column label="跳转链接">
        <template #default="scope">
          <a target="_blank" :href="scope.row.redirectUrl">{{
            scope.row.redirectUrl
          }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="carouselRank" label="排序值" width="120">
      </el-table-column>
      <el-table-column prop="createTime" label="添加时间" width="200">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="changePage"
    />
  </el-card>
</template>

<script>
export default {
  name: "Swiper",
};
</script>
<script setup>
import axios from "@/utils/axios";
import IconPlus from "~icons/ep/plus";
import IconDelete from "~icons/ep/delete";

const loading = ref(false); // 控制加载动画
const tableData = ref([]); // 数据列表
const currentPage = ref(1); // 当前页数
const pageSize = ref(10); // 每页请求数
const total = ref(0); // 总条数
onMounted(() => {
  getCarousels();
});
// 获取轮播图列表
const getCarousels = () => {
  loading.value = true;
  axios
    .get("/carousels", {
      params: {
        pageNumber: currentPage.value,
        pageSize: pageSize.value,
      },
    })
    .then((res) => {
      tableData.value = res.list;
      total.value = res.totalCount;
      currentPage.value = res.currPage;
      loading.value = false;
    });
};
const changePage = (val) => {
  currentPage.value = val;
  getCarousels();
};
const addSwiper = ref(null);
const type = ref("add");
// 添加轮播项
const handleAdd = () => {
  type.value = "add";
  addSwiper.value.open();
};
// 修改轮播图
const handleEdit = (id) => {
  type.value = "edit";
  addSwiper.value.open(id);
};

const multipleSelection = ref([]); // 选中项
// 选中之后的change方法，一旦选项有变化，就会触发该方法。
const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
// 批量删除
const handleDelete = () => {
  if (!multipleSelection.value.length) {
    ElMessage.error("请选择项");
    return;
  }
  axios
    .delete("/carousels", {
      data: {
        ids: multipleSelection.value.map((i) => i.carouselId),
      },
    })
    .then(() => {
      ElMessage.success("删除成功");
      getCarousels();
    });
};
</script>
