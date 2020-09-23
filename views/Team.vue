<template>
<div class="team">
    <h1>Team</h1>
    <template>
        <v-card elevation="24" max-width="444" class="mx-auto">

            <v-carousel hide-delimiters width="30" max-height="300px">
                <v-carousel-item v-for="person in team" :key="person" :src="person.avatar"></v-carousel-item>
            </v-carousel>
        </v-card>
    </template>

    <v-container class='my-5'>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                <v-card class="text-center ma-3">
                    <v-responsive class="pt-4">
                        <v-avatar size="100">
                            <img :src="person.avatar">
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="title">{{person.name}}</div>
                        <div class="grey--text">{{person.role}}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat text color='orange'>
                            <v-icon small left>message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>

</div>
</template>

<script>
export default {
    data() {
        return {
            team: [{
                    name: 'Asif Iqbal',
                    role: 'Gaming Demon',
                    avatar: 'https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/117996991_1149277978799085_3730559248719586106_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeGeu66zygMy1TnaF9yIAMJBYTsNGguPXFdhOw0aC49cVxXnXn0GdJYhxRKauRZ7_cEoYPxuktCVJC1drSgQjDJI&_nc_ohc=q6Y4BGJCHPAAX-HyNyt&_nc_ht=scontent.fdac31-1.fna&oh=1ae64188eac97e86d34489c3adb18c8a&oe=5F8AD108'
                },
                {
                    name: 'Saheb',
                    role: 'cha khor',
                    avatar: 'https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/26167171_1507038712679180_347456030158788772_n.jpg?_nc_cat=104&_nc_sid=174925&_nc_eui2=AeE9vr1Q2yfpQb_pcvnd6X3Oaytge2cKO8drK2B7Zwo7x3zSlvKsA7QdRtvRdqHbzznifXmnTHoxoittO6M9Rrv3&_nc_ohc=XCINfwp-_ZgAX8PK5gf&_nc_ht=scontent.fdac31-1.fna&oh=b4dd603ea8073ebcf1d044baffac47f1&oe=5F8E910E'
                },
                {
                    name: 'Sajib',
                    role: 'Blogger',
                    avatar: 'https://scontent.fdac31-1.fna.fbcdn.net/v/t31.0-8/23783799_806904499482579_9136453711596245895_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeGW2eyrlGnER8jw1F28o1wWkpHgRmn7vAOSkeBGafu8A4wHPreM8PD9jG0WVWQyIgo_gG8rWwK8x8SLimfXMBhJ&_nc_ohc=VYpYTbSyYgsAX8uIOVw&_nc_ht=scontent.fdac31-1.fna&oh=3053f57dfe961616b2b9931a5fc8c971&oe=5F8B5CDA'
                },
                {
                    name: 'Samad',
                    role: 'shaaap man',
                    avatar: 'https://scontent.fdac31-1.fna.fbcdn.net/v/t31.0-8/12473848_937167086333015_1853538357759193389_o.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_eui2=AeFB4vaiTHtig9b4RxQbNI87cNBK1T68MbBw0ErVPrwxsKqr99HOMD4cB7ze6jwgPjn-uMLScpfrktoneBJB3BAo&_nc_ohc=psXEjrPtr9oAX8Bkdw8&_nc_ht=scontent.fdac31-1.fna&oh=bdc67d55e0e37ca8824780a6d4de281c&oe=5F8D0AD4'
                },

                {
                    name: 'Husu',
                    role: 'voice messager man',
                    avatar: 'https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/118693226_311180213442035_359645967200233093_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_eui2=AeFIeVeVECN29gjo0VgppTGjX7thPJjmIANfu2E8mOYgA7TZPTFkgADAWOTp8UEYgvJgjG9689BWl2aQwk50_sCH&_nc_ohc=rKkYgCaOB8AAX-SY02m&_nc_ht=scontent.fdac31-1.fna&oh=54f5fb52ef9a9ccd4fc06a80eeaa4bd4&oe=5F8AB725'
                },
                {
                    name: 'Sahota',
                    role: 'coat pant tie',
                    avatar: 'https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/119938059_1236634790031517_3084996548213409880_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeEV5Z042npJL_ph2FvM0PiPpp4E_YRpbkimngT9hGluSM72bXsjN0WSp3Yl11fIoycw4YlphlCrAmKUvQQa5HNk&_nc_ohc=S0owv1pB21AAX_kab_a&_nc_ht=scontent.fdac31-1.fna&oh=a1140d1d2a70888ec9a54d804b221677&oe=5F8F7DC0'
                },
                {
                    name: 'Fahim',
                    role: '68 number',
                    avatar: 'https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/84677654_547973075816018_6751271711196315648_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeHBbMd7qGSAP-mr1zBnYKgMpZuC6sJlLKClm4LqwmUsoGrkp77Jb5D3pzKTIyA-bh0MRtUSFNp_KEgFe9Kva1UA&_nc_ohc=vl39Rx8loJYAX_U32GB&_nc_oc=AQnIiLrB8M0OaFq3fUQfOad6rf1pO_uoOUbBzPIesV7l1NHhmrTxpByqKps6sUs4WT8&_nc_ht=scontent.fdac31-1.fna&oh=24e7fa629b36d9616d2efecae99abe8b&oe=5F91B88F'
                },
                {
                    name: 'Arafat',
                    role: 'Vagne',
                    avatar: 'https://scontent.fdac31-1.fna.fbcdn.net/v/t1.0-9/119233457_618815198830412_3610467195524972592_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_eui2=AeHLIrNXsDf0jeeU2hCZljTXYf0rYte7-91h_Sti17v73duejjl3wGKoIcmoReFKKPc6pRlPW69U_qZxSFaTSZkU&_nc_ohc=EjT3qi7nQS0AX-CnzaU&_nc_ht=scontent.fdac31-1.fna&oh=6d5bcf5c449b639cbdaec483d814b2ca&oe=5F90B23B'
                },
            ]

        }
    }

}
</script>
