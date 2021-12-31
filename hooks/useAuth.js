import React, { createContext, useContext, useEffect, useState } from 'react'
import * as Google from 'expo-google-app-auth';
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({});

const config = {
    androidClientId: '66243156902-2bnfi7ur7cpah7ve7digh0m6f5cfe1ha.apps.googleusercontent.com',
    iosClientId: '66243156902-4f4d0sktsk265r7puaibf47dm3nr6gfk.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"]
}

export const AuthProvider = ({children}) => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => onAuthStateChanged(auth, (user) => {
            if(user){
                //Logged in....
                setUser(user);
            }else{
                //Not logged in....
                setUser(null);
            }

            setLoadingInitial(false)
        })
        
    , []
    );

    const logout = () => {
        setLoading(true);

        signOut(auth)
        .catch((error) => setError(error)).
        finally(() => setLoading(false));
    };

    const signInWithGoogle = async() => {
        setLoading(true);

        await Google.logInAsync(config).then(async (logInResult) => {
            if(logInResult.type === 'success'){
                //login....
                const {idToken, accessToken} = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken);

                await signInWithCredential(auth, credential)

            }
            return Promise.reject();
            
        }).catch(error => setError(error))
        .finally(() => setLoading(false));
        ;
    };

    return (
        <AuthContext.Provider 
        value={{
            user,
            loading,
            error,
            signInWithGoogle,
            logout,
        }}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth(){
    return useContext(AuthContext);
}




