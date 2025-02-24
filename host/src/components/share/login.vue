<template>
  <div class="p-8 mx-auto my-8 max-w-md rounded-xl border shadow-lg">
    <div class="flex mb-8">
      <button 
        @click="activeTab = 'login'"
        :class="['flex-1 p-4 transition-all', activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-100']"
      >
        登录
      </button>
      <button 
        @click="activeTab = 'register'"
        :class="['flex-1 p-4 transition-all', activeTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-100']"
      >
        注册
      </button>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- 登录表单 -->
      <div v-if="activeTab === 'login'" class="space-y-4">
        <div>
          <label class="block mb-2 text-gray-600">用户名</label>
          <input 
            v-model="form.username"
            type="text"
            placeholder="请输入用户名"
            required
            class="p-3 w-full rounded border focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label class="block mb-2 text-gray-600">密码</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            required
            class="p-3 w-full rounded border focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <!-- 注册表单 -->
      <div v-else class="space-y-4">
        <div>
          <label class="block mb-2 text-gray-600">用户名</label>
          <input
            v-model="form.username"
            type="text"
            placeholder="4-16位字母数字"
            required
            class="p-3 w-full rounded border focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label class="block mb-2 text-gray-600">密码</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="6-20位字符"
            required
            class="p-3 w-full rounded border focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label class="block mb-2 text-gray-600">确认密码</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="请再次输入密码"
            required
            class="p-3 w-full rounded border focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <button 
        type="submit" 
        class="p-4 w-full text-white bg-blue-500 rounded transition-colors hover:bg-blue-600"
      >
        {{ activeTab === 'login' ? '登录' : '注册' }}
      </button>
    </form>

    <div v-if="errorMessage" class="mt-4 text-center text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { login, register } from '@/api/modules/user/user';
import { useRouter } from 'vue-router';

console.log(process.env.API_APP_BASE_URL, 'env');
const router = useRouter();
const activeTab = ref<'login' | 'register'>('login');
const errorMessage = ref('');

const form = reactive({
  username: '',
  password: '',
  confirmPassword: ''
});

const validateForm = () => {
  if (!form.username || !form.password) {
    errorMessage.value = '用户名和密码不能为空';
    return false;
  }

  if (activeTab.value === 'register') {
    if (form.password !== form.confirmPassword) {
      errorMessage.value = '两次密码输入不一致';
      return false;
    }
    if (form.username.length < 4 || form.username.length > 16) {
      errorMessage.value = '用户名需4-16位字符';
      return false;
    }
    if (form.password.length < 6 || form.password.length > 20) {
      errorMessage.value = '密码需6-20位字符';
      return false;
    }
  }
  return true;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  try {
    const api = activeTab.value === 'login' ? login : register;
    const response = await api({
      name: form.username,
      password: form.password
    });

    if (response.code === 200) {
      // 登录成功处理
      localStorage.setItem('token', response.data.token);
      router.push('/dashboard');
    } else {
      errorMessage.value = response.message || '请求失败';
    }
  } catch (error) {
    errorMessage.value = (error as Error).message;
  }
};
</script>