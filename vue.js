new Vue({
    el: '#app',
    data() {
      return {
        name: '',
        email: '',
        comment: '',
        response: '',
        success: '',
        activeClass: 'active'
      }
    },
    methods: {
      submitForm() {
        axios.post('http://192.168.33.10/api/v2/elephant/_table/mail_form', {
          name: this.name,
          email: this.email,
          comment: this.comment
        }).then(response => {
          console.log(response);
          // this.response = response.data
          this.success = 'Data saved successfully';
          this.response = JSON.stringify(response, null, 2)
        }).catch(error => {
          this.response = 'Error: ' + error.response.status
        })
        this.name = '';
        this.email = '';
        this.comment = '';
      }
    }
  })