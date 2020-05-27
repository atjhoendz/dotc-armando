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
                sm="12"
                md="6"
                v-bind:style="[salah == true ? 'text-align: center':'']"
            >
                <v-btn
                    v-if="salah == true"
                    color="red white--text"
                    @click="msg='benerr yaa??'; txtClose='iyaa'; snackbar=true"
                >
                    Maafin akuu...
                </v-btn>
                <div v-if="salah == false">
                    <h1 style="text-align: center">Teka Teki Zheyeng</h1>
                    <v-stepper v-model="stepNum" vertical>
                        <v-stepper-step :complete="stepNum > 0" step="0">
                        Rules
                        </v-stepper-step>
                        <v-stepper-content step="0">
                        <div class="mb-12">
                            <p>
                                Jawab pertanyaan-pertanyaan berikut ini dengan seksama.
                                <br>
                                Jangan sampe salah, kalo salah nanti achun marah.
                                <br>
                                Kalo salah kamu harus minta maaf!
                            </p>
                        </div>
                        <v-btn @click="salah = true; stepNum = 0; snackbar=true" text>Gamwww</v-btn>
                        <v-btn @click="stepNum = 1" text>Lesgoo</v-btn>
                        </v-stepper-content>

                        <v-stepper-step :complete="stepNum > 1" step="1">
                        Pertanyaan 1
                        </v-stepper-step>
                        <v-stepper-content step="1">
                        <div class="mb-12">
                            <p>Umur achun kalo dihitung dari tanggal 31 Februari apakah sama aja boong?</p>
                        </div>
                        <v-btn @click="stepNum = 2" text>Hah?</v-btn>
                        <v-btn @click="salah = true; stepNum = 0; snackbar=true" text>Benar</v-btn>
                        </v-stepper-content>
                        
                        <v-stepper-step :complete="stepNum > 2" step="2">Pertanyaan 2</v-stepper-step>
                        <v-stepper-content step="2">
                        <div class="mb-12">
                            <p>Jadi berapa umur achun kalo dihitung dari 12 mei 2020</p>
                        </div>
                        <v-btn @click="salah = true; stepNum = 0; snackbar=true" text>20 kurang 1 minggu</v-btn>
                        <v-btn @click="stepNum = 3" text>20 kurang 7 hari</v-btn>
                        </v-stepper-content>

                        <v-stepper-step :complete="stepNum > 3" step="3">Pertanyaan 3</v-stepper-step>
                        <v-stepper-content step="3">
                        <div class="mb-12">
                            <v-img
                                :src="require('../assets/soal3.png')"
                                max-width="300"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                    >
                                    <v-progress-circular indeterminate color="blue"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <p>Tebak achun pake apa?</p>
                        </div>
                        <v-btn @click="stepNum = 4" text>Sendal</v-btn>
                        <v-btn @click="salah = true; stepNum = 0; snackbar=true" text>Sepatu</v-btn>
                        </v-stepper-content>

                        <v-stepper-step :complete="stepNum > 4" step="4">Pertanyaan 4</v-stepper-step>
                        <v-stepper-content step="4">
                        <div class="mb-12">
                            <p>Tongkol > Deles</p>
                        </div>
                        <v-btn @click="stepNum = 5" text>True</v-btn>
                        <v-btn @click="salah = true; stepNum = 0; snackbar=true" text>False</v-btn>
                        </v-stepper-content>

                        <v-stepper-step :complete="stepNum > 5" step="5">Pertanyaan 5</v-stepper-step>
                        <v-stepper-content step="5">
                        <div class="mb-12">
                            <p>Sayang achun gaaaa</p>
                        </div>
                        <v-btn @click="stepNum = 5" text>Sayang</v-btn>
                        <v-btn @click="stepNum = 6" text>Sayang bgt bgt bgt</v-btn>
                        </v-stepper-content>

                        <v-stepper-step step="6">Congratulation sayangku!!</v-stepper-step>
                        <v-stepper-content step="6">
                        <div class="mb-12">
                            <p>Selamatt WKKWK kamu udh berhasil melewati teka teki kecil ini. Sebagai hadiahnya silahkan download aja yaaa. Sekali lagi selamattt sayangkuu selamat membaca :*</p>
                        </div>
                        <!-- <v-btn color="primary" to>Continue</v-btn> -->
                        <a :href="`${publicPath}DariAkuUntukKamuSayangku.pdf`" download>Download</a>
                        </v-stepper-content>
                    </v-stepper>
                </div>
            </v-col>
        </v-row>
        <v-snackbar
            v-model="snackbar"
            color="primary"
            :multi-line="multiline"
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
                v-if="txtClose == 'iyaa'"
                @click="salah = !salah; snackbar = false; msg = 'Yah laa :('; txtClose = 'Close'"
            >
                {{ txtClose }}
            </v-btn>
        </v-snackbar>
    </v-container>
</template>
<script>
export default {
    name: 'TekaTeki',

    data: () => ({
        snackbar: false,
        msg: 'Yah laa :(',
        txtClose: 'Close',
        stepNum: 0,
        publicPath: process.env.BASE_URL,
        salah: false
    })
}
</script>