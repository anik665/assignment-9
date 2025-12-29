# SkillSwap 🎓🤝

SkillSwap is a skill-exchange platform where users can learn and teach skills by connecting with real people. Instead of paying money, users can exchange knowledge, grow together, and build a learning community.

---

## 🌐 Live Website

🔗 https://your-live-link-here.com

---

## 📌 Features

- 🔄 Skill exchange system (learn & teach)
- 👤 User authentication (Login / Register)
- 🧑‍🏫 Skill provider profiles
- ⭐ Skill rating and availability
- 📱 Fully responsive design
- 🎞️ Animated banner carousel (Swiper.js)
- ✨ Smooth UI animations (Framer Motion)

---

## 🛠️ Technologies Used

- **Frontend:** React, React Router
- **Styling:** Tailwind CSS, DaisyUI
- **Animations:** Framer Motion, Swiper.js
- **State Management:** React Hooks
- **Hosting:** Firebase / Netlify (optional)

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar/
│   ├── Banner/
│   ├── SkillCard/
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Register/
├── routes/
├── App.jsx
└── main.jsx
```

import React, { createContext, useEffect, useState } from "react";
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut,
updateProfile,
} from "firebase/auth";
import app from "../firebase.init";

export const AuthContex = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
console.log(user);

const [loading, setLoading] = useState(true);
// console.log(loading);

useEffect(() => {
const unsubCribe = onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser);
setLoading(false);
});
return () => {
unsubCribe();
};
}, []);

const CreateUser = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password);
};
const SignInUser = (email, password) => {
return signInWithEmailAndPassword(auth, email, password);
};
const UpdateUser = (upGradedata) => {
return updateProfile(auth.currentUser, upGradedata);
};
const SignOutUser = () => {
return signOut(auth);
};

const authValue = {
user,
setUser,
CreateUser,
SignInUser,
SignOutUser,
loading,
setLoading,
UpdateUser,
};
return <AuthContex value={authValue}> {children} </AuthContex>;
};

export default AuthProvider;
