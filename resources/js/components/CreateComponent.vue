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

					<div class="field">
					  <div class="control">
					    <input class="input" :class="{'is-danger':errors.name}" name="name" type="text" placeholder="Name" v-model="list.name">
					  </div>

					  <small  v-if="errors.name" class="has-text-danger">{{errors.name[0]}}</small>

					</div>

					<div class="field">
					  <div class="control">
					    <input class="input" :class="{'is-danger':errors.email}" name="email" type="email" placeholder="Email" v-model="list.email">
					  </div>

					  <small  v-if="errors.email" class="has-text-danger">{{errors.email[0]}}</small>
					</div>

					<div class="field">
					  <div class="control">
					    <input class="input" :class="{'is-danger':errors.phone}" name="phone" type="text" placeholder="Phone" v-model="list.phone">
					  </div>

					  <small  v-if="errors.phone" class="has-text-danger">{{errors.phone[0]}}</small>

					</div>

		    </section>
		    <footer class="modal-card-foot">
		      <button class="button is-success" @click="store">Save changes</button>
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
    		list:{
    			name:'',
    			phone:'',
    			email:'',
    		},
    		errors:{}
    };
  },

  methods:{
  	closeModel(){
  		this.$emit('closeModelRequest')
  	},

  	store(){
  		axios.post('/phoneBook',this.$data.list).then((response) => {
  			
  			this.closeModel()

  			this.list = {}
  			this.errors = {}

  		}).catch((error) => {

  				this.errors=error.response.data.errors

  		})


  	}

  },
  props:['openModel']
};
</script>

<style lang="css" scoped>
</style>
