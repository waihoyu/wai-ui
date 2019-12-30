<template>
  <!-- // 要将treeData通过prop进行传递 -->
  <B :propTreeData="treeData"/>
</template>
<script>
import B from './b'
export default {
  name: "Tree",
  data() {
    return {
      treeData: [
        {
          id: "1",
          menuName: "笑傲江湖",
          menuCode: "1",
          children: [
            {
              menuName: "令狐冲",
              menuCode: "10"
            },
            {
              menuName: "东方不败",
              menuCode: "11"
            }
          ]
        },
        {
          id: "2",
          menuName: "射雕英雄",
          menuCode: "2",
          children: [
            {
              menuName: "蓉儿",
              menuCode: "20"
            },
            {
              menuName: "郭靖",
              menuCode: "21"
            }
          ]
        }
      ]
    };
  },
  components:{B}
};
</script>

