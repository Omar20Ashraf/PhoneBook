<template>
	<div>
		<div class="modal" :class="openModel">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">Modal title</p>
		      <button class="delete" aria-label="close" @click="closeModel"></button>
		    </header>
		    <section class="modal-card-body">
		      <!-- Content ... -->
		    </section>
		    <footer class="modal-card-foot">
		      <button class="button is-success">Save changes</button>
		      <button class="button" @click="closeModel">Cancel</button>
		    </footer>
		  </div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'CreateComponent',

  data() {
    return {

    };
  },

  methods:{
  	closeModel(){
  		this.$emit('closeModelRequest')
  	}

  },
  props:['openModel']
};
</script>

<style lang="css" scoped>
</style>
