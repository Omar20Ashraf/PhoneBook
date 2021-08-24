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
		      <input class="input" type="text" placeholder="Search" v-model="searchQuery">
		      <span class="icon is-left">
		        <i class="fas fa-search" aria-hidden="true"></i>
		      </span>
		    </p>
		  </div>


		  <a class="panel-block" v-for="list,key in temp">
			
			<span class="column is-9">{{list.name}}</span>


		    <span class="panel-icon column is-1">
		      <i class="has-text-danger fa fa-trash" aria-hidden="true" @click="deleteList(key,list.id)"></i>
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
	    	searchQuery:'',
	    	lists:{},
	    	errors:{},
	    	temp:{},

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

	  			this.lists = this.temp = response.data

	  		}).catch((error) => this.errors=error.response.data.errors)
	  	},

	  	showDetails(key){
	  		
	  		this.$children[1].list = this.temp[key]

	  		this.showActive  = 'is-active'
	  	},

	  	editData(key){
	  		this.$children[2].list = this.temp[key]
	  		this.edtiActive  = 'is-active'
	  	},

	  	deleteList(key,id){

	  		if(confirm("Are You Sure?")){

		  		axios.delete(`/phoneBook/${id}`).then((response) => {

		  			this.lists.splice(key,1) 

		  		}).catch((error) => this.errors=error.response.data.errors)
	  		}

	  	}

	  },
	  components: {Create,show,edit},

	  mounted(){
	  	this.getData();
	  },
	  watch:{
	  	searchQuery(){
	  		if(this.searchQuery.length > 0){

	  			this.temp = this.lists.filter((list) => {

	  				return Object.keys(list).some((key) => {

	  					let string = String(list[key])
	  					// console.log(string)

	  					return string.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
	  				})
	  			})

	  		}else{

	  			this.temp = this.lists
	  		}
	  	}
	  }
	};
</script>