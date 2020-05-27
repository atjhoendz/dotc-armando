<template>
    <v-container
        class="fill-height"
        fluid
    >
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                style="text-align: center; "
            >
                <vue-typed-js
                    :strings="['Haloo...', 'teruntuk kamu', 'Delanika Olympiani Trieswari Caesarini', 'ini ada teka teki dulu buat kamu sayang...', 'pecahin ini dulu baru kamu bisa dapet pesannya yaa xixi', 'semangattt sayangku...']"
                    :loop="true"
                    :showCursor="false"
                    style="display: block"
                >
                    <p class="typing"></p>
                </vue-typed-js>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Home',
    
    data: () => ({

    })
}
</script>