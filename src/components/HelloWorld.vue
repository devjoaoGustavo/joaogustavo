<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/joao-profile.jpg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          João Gustavo de Paula
        </h1>
        <p class="subheading font-weight-regular">
	Software developer and a technology enthusiast for 5 years.
	<br>This is my personal website, I'm going to publish here my activities, learnings and discoveries related to technology.
	<br>Do you want to know more about me?
          <a href="https://www.linkedin.com/in/jo%C3%A3o-gustavo-de-paula-51487aa1/" target="_blank">visit my LinkedIn</a>
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">Personal Projects</h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in personalProjects"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Social Networks</h2>

        <v-layout justify-center>
          <a
            v-for="(link, i) in SocialNetworks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Posts</h2>

        <v-layout justify-center>
	  <span v-if="posts.length == 0">Soon...</span>
          <a
            v-for="(link, i) in posts"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      SocialNetworks: [
        {
          text: 'Facebook',
          href: 'https://www.facebook.com/devjoaogustavo'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/devjoaogustavo'
        },
        {
          text: 'Github',
          href: 'https://github.com/devjoaoGustavo'
        }
      ],
      personalProjects: [
        {
          text: 'Million',
          href: 'https://github.com/devjoaoGustavo/million'
        }
      ],
      posts: []
    })
  }
</script>

<style>

</style>
