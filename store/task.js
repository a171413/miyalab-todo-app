export const state = () => ({
    task: [],
    page: 0,
})

export const mutations = {

    insert: function(state, obj) {
        state.task.unshift({
            task: obj.task,
            datetime: obj.datetime,
        });
    },
}
