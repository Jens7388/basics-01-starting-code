const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue',
            vueLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        };
    }
});

app.mount('#user-goal');