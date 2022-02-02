import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
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
    androidClientId: '66243156902-3n2k32912qv4jopi1ovk85rko5r381ub.apps.googleusercontent.com',
    iosClientId: '66243156902-cqdvvmpta6f66kl2ogs41jkkhqteki7a.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender"]
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
    

    const memoedValue = useMemo(() => ({
        user,
            loading,
            error,
            signInWithGoogle,
            logout,
            
    }), [user, loading, error,])

    return (
        <AuthContext.Provider 
        value={memoedValue}
        >
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth(){
    return useContext(AuthContext);
}




