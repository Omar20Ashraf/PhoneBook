<template>

	<div>
		<div class="modal" :class="openModel">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">{{list.name}}</p>
		      <button class="delete" aria-label="close" @click="closeModel"></button>
		    </header>

		    <section class="modal-card-body">
		      <!-- Content ... -->

		      <li class="panel-block">
		      	<label for="" class="column is-2">Name</label> {{list.name}}
		      </li>

		      <li class="panel-block">
		      	<label for="" class="column is-2">Email</label> {{list.email}}
		      </li>

		      <li class="panel-block">
		      	<label for="" class="column is-2">Phone</label> {{list.phone}}
		      </li>

		    </section>
		    
		    <footer class="modal-card-foot">
		      <button class="button" @click="closeModel">Cancel</button>
		    </footer>
		  </div>
		</div>
	</div>

</template>

<script>
export default {

  name: 'ShowComponent',

  data() {
    return {
    	list:'',
    };
  },

  methods:{
  	closeModel(){
  		this.$emit('closeModelRequest')
  	},
  },

  props:['openModel']
};
</script>