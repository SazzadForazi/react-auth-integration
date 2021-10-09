import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsinGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)

            }).catch(error => {
                setError(error.message)
            })

    }
    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message)
        });

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log('inside  state change', user);
                setUser(user)
            }
        })

    }, [])
    return {
        user,
        error,
        signInUsinGoogle,
        logOut
    }

}
export default useFirebase;