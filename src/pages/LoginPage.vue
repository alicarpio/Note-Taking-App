<script lang="ts" setup>

import {ErrorMessage, Field, Form} from "vee-validate";
import {toTypedSchema} from "@vee-validate/yup";
import * as yup from "yup";
import {InferType} from "yup";
import {useAuth} from "@stores/authStore.ts";
import {useRouter} from "vue-router";

const schema = yup.object({
  email: yup.string().required("El nombre de usuario es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

const auth = useAuth();
const router = useRouter();
const typedSchema = toTypedSchema(schema);

const onSubmit = async (values: InferType<typeof schema>) => {
  try {
    await auth.login({
      email: values.email,
      password: values.password,
    });
    await router.push("/home");
  } catch {
    // TODO: Show error in toast.
  }
};
</script>

<template>
  <section class="flex items-center justify-center min-h-screen ">
    <div class="w-1/4">
      <h1 class="text-4xl text-center">Welcome back!</h1>
      <h2 class="text-center mb-6">Please enter login details below</h2>

      <Form :validation-schema="typedSchema" class="space-y-5" @submit="onSubmit">
        <div class="flex flex-col">
          <label class="text-gray-900 font-medium mb-2" for="email">Email</label>
          <Field id="email"
                 class="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                 name="email"
                 required
                 type="text"
          />
          <ErrorMessage class="mt-2 text-sm text-red-600" name="email"/>
        </div>
        <div class="flex flex-col">
          <label for="password">Password</label>
          <Field id="password"
                 class="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                 name="password"
                 required
                 type="text"
          />
          <div class="flex">
            <!--            <span class="text-sm font-bold">Error!</span>-->
            <ErrorMessage class="mt-2 text-sm text-red-600" name="password"/>
          </div>

        </div>
        <button
            class="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
            type="submit"
        >
          Enter
        </button>
        <div class="flex justify-center">
          <span class="">Don't you have an account?
          <RouterLink to="/register">
            <span class="text-primary pl-1 font-medium">Sign up</span>
          </RouterLink>
          </span>
        </div>
      </Form>
    </div>
  </section>
</template>

