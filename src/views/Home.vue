<script>
</script>

<template>
  <main>
    <div class="hero">
      <p class="slogan">So, you want to travel to</p>
      <h1 class="title">Space</h1>
      <p class="txt">
      Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!    
      </p>      
    </div>
    <div class="button">
      <button class="btn"><RouterLink to="/destination" class="explore">Explore</RouterLink></button> 
    </div>
  </main>
</template>

<style>
main{
  display: flex;
  flex-direction: row;
  gap: 1.875rem;
  align-items: center;
  justify-content: center;
  padding-block: 26rem 8rem;
  padding-inline: 8rem;
}
.hero {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.hero p {
  color: var(--herop-color);
}
.slogan {
  font-family: var(--span-font);
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 4px;
}
.title {
  font-family: var(--title-font);
  font-size: 9rem;
  text-transform: uppercase;
  color: var(--text-color);
  margin-block: 2rem;
}
.txt {
  font-family: var(--text-font);
  font-size: 1rem;
  line-height: 180%;
}
.button {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.btn {
  position: relative;
  width: 50%;
  background: var(--text-color);
  padding: 117.5px 68px;
  width: 17rem;
  border-radius: 50%;
  text-transform: uppercase;
  font-family: var(--title-font);
  font-size: 2rem;
  border: none;
  text-decoration: none;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--text-color);
  z-index: -1;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: scale(1);
  opacity: 0;
}

.btn:hover::before {
  transform: scale(1.5); /* Adjusted for larger size */
  opacity: 0.2;
}

.explore {
  text-decoration: none;
  color: var(--herobtntxt-color);  
}
.explore:hover {
  color: rgba(11, 13, 23, 0.5)
}
</style>