<template>
  <v-app>
    <div>
      <v-app-bar color="deep-purple accent-4" dark dense>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Go/Gin API - Vuetify</v-toolbar-title>
        <v-spacer></v-spacer>

        <router-link to="about">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/">
          <v-btn icon>
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </router-link>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link to="/"> Home </router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <v-main>
          <router-view />
        </v-main>
      </v-container>

      <v-footer fixed color="deep-purple" dark light shaped>
        <h1>The footer</h1>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
