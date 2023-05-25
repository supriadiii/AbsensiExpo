import * as SecureStore from "expo-secure-store";

export const getDataFromStorage = async () => {
  try {
    const storedName = await SecureStore.getItemAsync("name");
    const storedNim = await SecureStore.getItemAsync("nim");
    const storedKelas = await SecureStore.getItemAsync("kelas");
    const storedProdi = await SecureStore.getItemAsync("prodi");
    const storedPassword = await SecureStore.getItemAsync("password");
    const storedConfirmPassword = await SecureStore.getItemAsync("confirmPassword");

    // ...
    console.log("storedKelas", storedKelas);

    if (
      storedName !== null &&
      storedPassword !== null &&
      storedConfirmPassword !== null &&
      storedNim !== null &&
      storedKelas !== null &&
      storedProdi !== null
    ) {
      return {
        nameLocal: storedName,
        nimLocal: storedNim,
        kelasLocal: storedKelas,
        prodiLocal: storedProdi,
        passwordLocal: storedPassword,
      };
    }

    console.log("Data loaded from local storage");
    return null;
  } catch (error) {
    console.log("Error loading data from local storage:", error);
    return null;
  }
};
