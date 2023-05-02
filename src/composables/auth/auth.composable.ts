import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { Ref, ref } from 'vue';

const localUser: Ref<User | null> = ref(null);

export const useAuth = () => {
  const isLoading = ref(false);
  const hasFailed = ref(false);
  const localError: Ref<unknown> = ref(null);

  const auth = getAuth();

  const loginInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();

    isLoading.value = true;
    hasFailed.value = false;
    localError.value = null;

    try {
      const result = await signInWithPopup(auth, provider);

      localUser.value = result.user;
    } catch (error) {
      hasFailed.value = true;
      localError.value = error;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    hasFailed,
    user: localUser,
    error: localError,
    loginInWithGoogle,
  };
};
