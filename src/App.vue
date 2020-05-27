<template>
  <v-app>
    <v-content>
      <v-btn
        v-if="isMulai == false"
        color="pink"
        dark
        fab
        absolute
        top
        :style="{'left': '50%', 'top': '50%', 'transform':'translateX(-50%)' }"
        @click="isMulai = !isMulai"
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <router-view v-if="isMulai == true" />
    </v-content>
    <v-btn
      v-if="$route.name == 'home' && isMulai == true"
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="pink white--text">
          WOW selamat datang sayanggg
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                align="center"
                justify="center"
              >
                <v-avatar
                  size="100px"
                  class="mx-3"
                >
                  <v-img
                    src="http://api.himatif.org/data/assets/foto/2018/26.jpg"
                    class="=grey darken-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-avatar>
              </v-row>
              <v-row
                align="center"
                class="mr-0"
              >
                <v-text-field
                  placeholder="Aku tau nama kamu, apakah yang aku tau sama dengan yang kamu tau, kasih tau aku. tp jgn sepotong"
                  v-model="nama"
                ></v-text-field>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="red"
            @click="dialog = false;"
          >Menyerah</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Gamau</v-btn>
          <v-btn
            text
            @click="lanjut();"
          >Lanjutt</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      color="primary"
    >
      {{ msg }}
      <v-btn
        dark
        text
        v-if="txtClose == 'Close'"
        @click="snackbar = false"
      >
        {{ txtClose }}
      </v-btn>
      <v-btn
        dark
        text
        v-if="txtClose == 'Next'"
        @click="dialog = false; $router.push({name:'tekateki', params: { isBerhasil }}); snackbar= false"
      >
        {{ txtClose }}
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    dialog: false,
    snackbar: false,
    msg: '',
    multiline: false,
    txtClose: 'Close',
    nama: '',
    isBerhasil: false,
    isMulai: false
  }),

  methods: {
    lanjut() {
      if(this.nama === 'Delanika Olympiani Trieswari Caesarini') {
        this.msg = 'Waw sayangggkuu kamu berhasil kita lanjut yukyuk';
        this.txtClose = 'Next';
        this.multiline = true;
        this.snackbar = true;
        this.isBerhasil = true;
      } else {
        this.msg = 'yahh laa :(';
        this.snackbar = true;
      }
    }
  }
};
</script>
