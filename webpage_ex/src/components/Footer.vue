<script setup>

</script>
<template>
    <!-- 푸터 -->
  <footer class="footer">
    <p>© 2025 MyShop. All rights reserved.</p>
    <div class="sns">
      <a href="#">Facebook</a> | <a href="#">Instagram</a> |
      <a href="#">Twitter</a>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
/* 푸터 */
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 30px;
}
.sns{
    display: flex;
    justify-content: center;
}
.sns a {
  color: #ddd;
  text-decoration: none;
  margin: 0 5px;
}

.sns a:hover {
  color: white;
}
</style>