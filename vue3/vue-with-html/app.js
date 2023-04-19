const vm = Vue.createApp({
data(){
    return {
        firstName: 'John',
        lastName: 'Doe',
        url: 'https://bing.com',
        raw_url: "<a href='https://google.com'>Google</a>",
        age: 20, 
    }
},

methods: {
    fullName() {
        return `${this.firstName} ${this.lastName.toUpperCase()}`
    }, 
    increment() {
        this.age++
    },
    updateLastName(event){
        this.lastName = event.target.value
    }
},
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Bob'
// }, 2000)

// Vue.createApp({
//     data() {
//         return{
//             firstName: 'PRa',
//             lastName: 'MMy'
//         }
//     }
// }).mount('#app2')