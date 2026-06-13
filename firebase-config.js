// SFTI 项目的 Firebase Web 配置。
// 测试页会写入 sfti_results 集合，统计页会实时读取这个集合。
export const firebaseConfig = {
  apiKey: "AIzaSyD9-XCwi_Af4c4NvV7xfj5GTTiT8ei1Y_Q",
  authDomain: "sfti-web.firebaseapp.com",
  projectId: "sfti-web",
  storageBucket: "sfti-web.firebasestorage.app",
  messagingSenderId: "976469511749",
  appId: "1:976469511749:web:698c3bea10f66c87b09d2c"
};

export const firebaseReady =
  firebaseConfig.apiKey &&
  !firebaseConfig.apiKey.startsWith("PASTE_") &&
  firebaseConfig.projectId &&
  !firebaseConfig.projectId.startsWith("PASTE_");
