<template>

	<div>

		<nav class="panel column is-offset-2 is-8">
		  <p class="panel-heading">
		    PhoneBook

		    <button class="button is-primary is-outlined" @click="openModel">
		      Add New
		    </button>
		  </p>

		  <div class="panel-block">

		    <p class="control has-icons-left">
		      <input class="input" type="text" placeholder="Search">
		      <span class="icon is-left">
		        <i class="fas fa-search" aria-hidden="true"></i>
		      </span>
		    </p>
		  </div>


		  <a class="panel-block">
			
			<span class="column is-9">
				
		    	bulma
			</span> 


		    <span class="panel-icon column is-1">
		      <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
		    </span>

		    <span class="panel-icon column is-1">
		      <i class="has-text-info fa fa-edit" aria-hidden="true"></i>
		    </span>

		    <span class="panel-icon column is-1">
		      <i class="has-text-primary fa fa-eye" aria-hidden="true"></i>
		    </span>
		  </a>
		</nav>

		<create :openModel='addActive' @closeModelRequest="closeModel"></create>
	</div>
</template>

<script>

	import Create from "./CreateComponent.vue";
	
	export default {
		
	  data() {
	    return {
	    	addActive:''
	    };
	  },

	  methods:{
	  	openModel(){
	  		this.addActive = 'is-active'
	  	},	  	
	  	closeModel(){
	  		this.addActive = ''
	  	},

	  },
	  components: {Create},
	};
</script>