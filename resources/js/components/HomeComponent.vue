<template>

	<div>

		<nav class="panel column is-offset-2 is-8">
		  <p class="panel-heading">
		    PhoneBook

		    <button class="button is-primary is-outlined" @click="create">
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


		  <a class="panel-block" v-for="list,key in lists">
			
			<span class="column is-9">{{list.name}}</span>


		    <span class="panel-icon column is-1">
		      <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
		    </span>

		    <span class="panel-icon column is-1">
		      <i class="has-text-info fa fa-edit" aria-hidden="true" @click="editData(key)"></i>
		    </span>

		    <span class="panel-icon column is-1">
		      <i class="has-text-primary fa fa-eye" aria-hidden="true" @click="showDetails(key)"></i>
		    </span>
		  </a>
		</nav>

		<create :openModel='addActive' @closeModelRequest="closeModel"></create>

		<show :openModel='showActive' @closeModelRequest="closeModel"></show>

		<edit :openModel='edtiActive' @closeModelRequest="closeModel"></edit>
	
	</div>
</template>

<script>

	import Create from "./CreateComponent.vue";
	import show from "./ShowComponent.vue";
	import edit from "./EditComponent.vue";
	
	export default {
		
	  data() {
	    return {
	    	addActive:'',
	    	showActive:'',
	    	edtiActive:'',
	    	lists:{},
	    	errors:{},

	    };
	  },

	  methods:{
	  	create(){
	  		this.addActive = 'is-active'
	  	},

	  	closeModel(){
	  		this.addActive = this.showActive = this.edtiActive =   ''
	  	},

	  	getData(){
	  		axios.get('/getData').then((response) => {
	  			this.lists = response.data
	  		}).catch((error) => this.errors=error.response.data.errors)
	  	},

	  	showDetails(key){
	  		
	  		this.$children[1].list = this.lists[key]

	  		this.showActive  = 'is-active'
	  	},

	  	editData(key){
	  		this.$children[2].list = this.lists[key]
	  		this.edtiActive  = 'is-active'
	  	}

	  },
	  components: {Create,show,edit},

	  mounted(){
	  	this.getData();
	  },
	};
</script>