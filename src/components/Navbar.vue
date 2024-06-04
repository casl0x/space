<script setup>
</script>

<template>
  <nav class="nav">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg"/>
      <ul class="list">
          <li>
            <RouterLink to="/" class="link"><span>00</span> Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/destination" class="link"><span>01</span> Destination</RouterLink>
          </li>
          <li>
            <RouterLink to="/crew" class="link"><span>02</span> Crew</RouterLink>
          </li>
          <li>
            <RouterLink to="technology" class="link"><span>03</span> Technology</RouterLink>
          </li>
      </ul>        
  </nav>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  margin: 2.5rem auto auto 4rem;
}
.list {
  background: linear-gradient(90deg,rgba(255, 255, 255, 0.05) 0%, rgba(230, 230, 230, 0.05) 24%, rgba(153, 153, 153, 0.05) 100%) ;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  padding-inline: 9.5rem 4rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
  text-transform: uppercase;
}
.link {
  color: var(--text-color);
  font-family: var(--span-font);    
  letter-spacing: 0.25rem;
  word-spacing: 0.75rem;
  padding-block: 0.80rem;
  text-decoration: none;
}
.active-link {
  border-bottom: 3px solid var(--text-color);
}
.link:hover {
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

.link span {
  font-weight: bold;
}

</style>