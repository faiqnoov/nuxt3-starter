<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

definePageMeta({
  layout: 'plain'
})

const email = ref('');
const password = ref('');

/* const { data, status, error, refresh } = await useFetch('http://localhost:1337/api/auth/local/', {
  method: 'POST',
  body: {
    identifier: email.value,
    password: password.value,
  },
  headers: {
    'Content-Type': 'application/json',
  },
}) */

// useing useFetch interceptors
const { data, status, error, refresh } = await useFetch('http://localhost:1337/api/auth/local/', {
  onRequest({ request, options }) {
    options.immediate = false
    options.method = 'POST'
    options.body = {
      identifier: email.value,
      password: password.value,
    }
    options.headers = {
      'Content-Type': 'application/json',
    }
  },
  onRequestError({ request, options, error }) {
    console.log('onRequestError:', error);
  },
  onResponse({ request, response, options }) {
    console.log('onResponse:', response);

    localStorage.setItem('token', response._data.jwt)
    navigateTo('/')
  },
  onResponseError({ request, response, options }) {
    console.log('onResponseError:', response);
  }
})


</script>

<template>
  <div class="flex h-full justify-center items-center">
    <Card class="max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">
          Login
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" v-model="email" required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required v-model="password" />
          </div>
          <Button type="submit" class="w-full" @click="refresh">
            Login
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline">
            Sign up
          </a>
        </div>
      </CardContent>
    </Card>
  </div>
</template>