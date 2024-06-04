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
      <button class="btn">Explore</button> 
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
  width: 50%;
  background: var(--text-color);
  color: var(--herobtntxt-color);
  padding: 117.5px 68px;
  width: 17rem;
  border-radius: 50%;
  text-transform: uppercase;
  font-family: var(--title-font);
  font-size: 2rem;
  border: none;
}
</style>