<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '~/hooks/useSidebar'

const dropdownOpen = ref(false)
const { isOpen } = useSidebar()
</script>

<template>
  <l-dark-mode-container class="flex items-center justify-between px-6 py-4 shadow-xl">
    <div class="flex items-center">
      <button class="lg:hidden focus:outline-none" @click="isOpen = true">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="flex items-center">
      <button class="mx-4 flex focus:outline-none">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative">
        <button
          class="relative z-10 block h-8 w-8 overflow-hidden rounded-full shadow focus:outline-none"
          @click="dropdownOpen = !dropdownOpen"
        >
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          >
        </button>

        <div v-show="dropdownOpen" class="fixed inset-0 z-10 h-full w-full" @click="dropdownOpen = false" />

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform" leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div v-show="dropdownOpen" class="absolute right-0 z-20 mt-2 w-48 rounded-md py-2 shadow-xl">
            <a href="#" class="block px-4 py-2 text-sm">Profile</a>
            <a href="#" class="block px-4 py-2 text-sm">Products</a>
            <router-link to="/" class="block px-4 py-2 text-sm">
              Log out
            </router-link>
          </div>
        </transition>
      </div>
    </div>
  </l-dark-mode-container>
</template>
