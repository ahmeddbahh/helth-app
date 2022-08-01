export default {
    methods: {
        httpErrorCodesHandling(err) {
            if (!err.response)
                this.$router.push({
                    name: "serverError"
                })
            if (err.response.status == 403)
                this.$router.push({
                    name: "forbiden"
                })
            else if (err.response.status == 404)
                this.$router.push({
                    name: "notFound"
                })
            else if (err.response.status >= 500)
                this.$router.push({
                    name: "serverError"
                })
        }
    },
}