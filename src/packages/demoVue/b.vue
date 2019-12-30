<template>
  <ul>
    <li v-for="item in propTreeData" :key="item.menuCode">
      {{item.menuName}}
      <!-- // 要有一个结束条件 -->
      <tree v-if="item.children&&item.children.length" :propTreeData="item.children"></tree>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Tree",
  props:{
    propTreeData:Array,
    default:()=>([])
  },
};
</script>

